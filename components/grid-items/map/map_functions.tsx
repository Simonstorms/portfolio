"use client";
import { useTheme } from "next-themes";
import { startTransition, useEffect, useRef, useState } from "react";
import { MapRef } from "react-map-gl";
import useThemeChecker from "@/hooks/useThemeChecker";

export default function useMap({
                                   coords,
                               }: {
    coords?: { latitude: number; longitude: number };
}) {
    useThemeChecker();
    const { resolvedTheme } = useTheme();
    const [transitioning, setTransitioning] = useState(false);
    const [zoom, setZoom] = useState(coords ? 11 : 2.7);
    const [exactZoom, setExactZoom] = useState(coords ? 11 : 2.7);
    const [style, setStyle] = useState("mapbox://styles/simonstorms/clrzid43b00t401plav3m0jlg");

    const mapRef = useRef<MapRef>(null);

    useEffect(() => {
        if (transitioning) {
            setTimeout(() => {
                startTransition(() => {
                    setTransitioning(false);
                });
            }, 1000);
        }
    }, [transitioning]);

    // if resolvedTheme changes, change map style
    useEffect(() => {
        if (resolvedTheme === "light") {
            startTransition(() => {
                setStyle("mapbox://styles/simonstorms/clrziecc000an01pndst5bnox");
            });
        } else {
            startTransition(() => {
                setStyle("mapbox://styles/simonstorms/clrzid43b00t401plav3m0jlg");
            });
        }
    }, [resolvedTheme]);

    //center to marker
    useEffect(() => {
        if (!coords) {
            mapRef.current?.flyTo({
                zoom: zoom,
                duration: 1000,
            });
            startTransition(() => {
                setExactZoom(zoom);
            });
        } else {
            mapRef.current?.flyTo({
                center: [coords.longitude, coords.latitude],
                zoom: zoom,
                duration: 1000,
            });

            startTransition(() => {
                setExactZoom(zoom);
            });
        }
    }, [zoom]);

    const setUncontrolledZoom = () => {
        if (transitioning) {
            return;
        }

        startTransition(() => {
            setExactZoom(mapRef.current?.getZoom() || 10);
        });
    };

    if (coords)
        return {
            setUncontrolledZoom,
            mapRef,
            zoom,
            setZoom,
            exactZoom,
            style,
            resolvedTheme,
            setTransitioning,
        };

    // hide all labels
    // const show = false;
    // const mapboxMap = mapRef.current?.getMap();
    // if (mapboxMap) {
    //   console.log(mapboxMap.getStyle().layers[0]);
    //   mapboxMap.getStyle().layers?.forEach(function (layer) {
    //     if (layer.type === "symbol" && layer.id !== "my-data-label") {
    //       mapboxMap.setLayoutProperty(
    //         layer.id,
    //         "visibility",
    //         show ? "visible" : "none"
    //       );
    //     }
    //   });
    // }

    return {
        setUncontrolledZoom,
        mapRef,
        zoom,
        setZoom,
        exactZoom,
        style,
        resolvedTheme,
        setTransitioning,
    };
}