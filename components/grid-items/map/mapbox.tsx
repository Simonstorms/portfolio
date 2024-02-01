"use client"
import { Map, type Projection } from "react-map-gl";
import Contribution from "./map_contribution";
import Controls from "./map_controls";
import { LocationMarker } from "./map_location";
import useMap from "./map_functions";
import "@/styles/mapbox-gl.css";
import {token} from "@/components/grid-items/map/token";


export default function Mapbox({
                                          coords,
                                      }: {
    coords: { latitude: number; longitude: number };
}) {
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
    console.log(token)
    return (
        <div className="relative h-full w-full">
            <Map
                onZoom={() => setUncontrolledZoom()}

                ref={mapRef}
                maxZoom={coords ? 11 : 20}
                minZoom={0.0000001}
                mapStyle={style}
                //mapboxAccessToken={token}
                mapboxAccessToken="pk.eyJ1Ijoic2ltb25zdG9ybXMiLCJhIjoiY2xyeXd0MXd6MHFteDJqbnVnMDMzejYyNSJ9.l8Gkak-toCAmgndUgLjJTw" // WARNING: this is a private token and should not be published on github
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