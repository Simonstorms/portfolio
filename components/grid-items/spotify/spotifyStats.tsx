"use client";
import type { SpotifyResponse } from "./SpotifyNowPlaying";
import Link from "next/link";
import SpotifyText from "./spotifyText";
import { useEffect, useState } from "react";
import {SiSpotify} from "react-icons/si";
import Image from "next/image";

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
            const props = await fetch("/api/spotify").then((res) => res.json());
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
                <span className="text-xs">Now playing:</span>
                <br />
                <Image
                    width="100"
                    height="100"
                    src={props.albumImageUrl ?? ""}
                    alt="Album cover"
                    style={{ objectFit: 'cover' }}

                />

                <Link href={props.url ?? ""} target="_blank" rel="norefferer">
                    <SpotifyText>{songName}</SpotifyText>
                </Link>
                <span className="text-sm text-gray-400">
          by:{" "}
                    <Link href={props.artistUrl ?? ""} target="_blank" rel="norefferer">
            {props.artist}
          </Link>
        </span>
                <br />
            </div>
        );
    };

    const LastPlayed = () => {
        return (
            <div>
                <div className="mb-24"><SiSpotify size={30} color="#1ED760" /></div>
                <span className=" pb-[1px]">Offline, Last played:</span>
                <br />
                <Link href={randomSong.url}>
                    <span className="text-2xl font-bold">{randomSong.song}</span>
                </Link>
                <br />
                <span className="font-silka text-sm text-gray-400">
          by: <Link href={randomSong.artistUrl}>{randomSong.artist}</Link>
        </span>
                <br />
            </div>
        );
    };



    return (
        <div className="group flex h-full w-full flex-col p-4">

            <div className=" flex flex-col">
                {props.nowPlaying ? <NowPlaying /> : <LastPlayed />}
            </div>
        </div>
    );
}