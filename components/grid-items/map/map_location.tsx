"use client";
import clsx from "clsx";
import Image from "next/image";
import { Marker } from "react-map-gl";


type Coords = {
    latitude: number;
    longitude: number;
};

interface MarkerProps {
    exactZoom: number;
}

interface Location extends MarkerProps {
    coords: Coords;
}

export const LocationMarker = ({ exactZoom, coords }: Location) => {
    return (
        <Marker
            draggable={false}
            longitude={coords?.longitude}
            latitude={coords?.latitude}
        >
            <div
                className="h-24 w-24 rounded-full border-4 border-primary bg-blue-200 opacity-80 transition-all duration-1000"
                style={{
                    transform: `scale(${Math.min(Math.max(0.1, (exactZoom - 2) / 10), 1)}
          )`,
                }}
            >
                <Image
                    src="/images/sun.png"
                    alt="memoji knocked out"
                    width={71}
                    height={71}
                    className={clsx(
                        "pointer-events-none absolute inset-0 top-2 m-auto transform rounded-full transition duration-500 ease-in-out "
                    )}
                />
            </div>
        </Marker>
    );
};
