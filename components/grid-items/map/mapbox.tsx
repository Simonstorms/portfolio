"use client"
import { Map, type Projection } from "react-map-gl";
import Contribution from "./map_contribution";
import Controls from "./map_controls";
import { LocationMarker } from "./map_location";
import useMap from "./map_functions";
import "@/styles/mapbox-gl.css";

export default function Mapbox({coords}: {
    coords: { latitude: number; longitude: number };
}) {

    console.log(coords)
    const {
        setUncontrolledZoom,
        mapRef,
        setZoom,
        exactZoom,
        style,
        setTransitioning,
    } = useMap({ coords });

    const projection: Projection = {
        name: "globe",
    };
    console.log(style)
console.log(exactZoom)
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    if (!token) {
        return "missing token"
    }

    return (
        <div className="relative h-full w-full">
            <Map
                onZoom={() => setUncontrolledZoom()}

                ref={mapRef}
                maxZoom={coords ? 11 : 20}
                minZoom={0.0000001}
                mapStyle={style}
                mapboxAccessToken={token}
                initialViewState={{
                    longitude: coords.longitude,
                    latitude: coords.latitude,
                    zoom: 11,
                }}
                projection={projection}
                attributionControl={false}
            >
                {/* Show a marker with my current location*/}
                <LocationMarker exactZoom={exactZoom} coords={coords} />
            </Map>
            <Contribution />

            <Controls
                exactZoom={exactZoom}
                setZoom={setZoom}
                setTransitioning={setTransitioning}
            />
        </div>
    );
}