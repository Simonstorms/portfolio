"use client";
import type { SpotifyResponse } from "./SpotifyNowPlaying";
import Link from "next/link";
import SpotifyText from "./spotifyText";
import { useEffect, useState } from "react";
import {SiSpotify} from "react-icons/si";
import Image from "next/image";
import "@/styles/MusicBars.css";

type OfflineSong = {
    song: string;
    artist: string;
    url: string;
    artistUrl: string;
    albumImageUrl: string;
};

type Props = SpotifyResponse & { randomSong: OfflineSong };

export default function SpotifyStats({
                                         props: initialProps,
                                         randomSong,
                                     }: Props) {
    const [props, setProps] = useState(initialProps);

    useEffect(() => {
        const interval = setInterval(async () => {
            const props = await fetch("/api/spotify/").then((res) => res.json());
            setProps(props);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const longSongName =
        props.song && props.song?.indexOf("(") > 0
            ? props.song?.substring(0, props.song?.indexOf("("))
            : props.song ?? "";

    const songName =
        longSongName?.length > 28
            ? longSongName?.substring(0, 25) + "..."
            : longSongName;

    const NowPlaying = () => {
        return (
            <div>
                <SiSpotify size={30} color="#1ED760" />

                <br />
                <div className="flex -mt-2 justify-center">
                <Image
                    width="140"
                    height="140"
                    src={props.albumImageUrl ?? ""}
                    alt="Album cover"
                    className="mx-auto"

                />
                </div>
            <div className="flex justify-between">
            <div>
                <div className="mt-6">
                <Link href={props.url ?? ""} target="_blank" rel="norefferer">
                    <SpotifyText>{songName}</SpotifyText>
                </Link>
                </div>
                <span className=" leading-6 text-gray-400">

                    <Link href={props.artistUrl ?? ""} target="_blank" rel="norefferer">
                        {props.artist}
                    </Link>
                </span>
            </div>
                <div className="mt-auto mb-2 mr-2 bars">
                    <div className="bars__item"></div>
                    <div className="bars__item"></div>
                    <div className="bars__item"></div>
                    <div className="bars__item"></div>
                </div>
            </div>

            </div>
        );
    };

    const LastPlayed = () => {
        return (
            <div>
                <div className="mb-40"><SiSpotify size={30} color="#1ED760"/></div>
                <div className="mt-8">
                    <span className=" pb-[1px]">Offline, Last played:</span>
                    <br/>

                    <Link href={randomSong.url}>
                        <SpotifyText>{randomSong.song}</SpotifyText>
                    </Link>
                </div>
                <span className="leading-6  text-gray-400"><Link
                    href={randomSong.artistUrl}>{randomSong.artist}</Link>
        </span>

                <br/>
            </div>
        );
    };


    return (
        <div className="group flex h-full w-full flex-col p-4
       ">

            <div className=" flex flex-col">
                {!props.nowPlaying || (props.artist=== "Unknown")  ?  <LastPlayed /> : <NowPlaying />}
            </div>
        </div>
    );
}