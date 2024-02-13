import SpotifyStats from "./spotifyStats";

export interface SpotifyResponse {
    props: {
        isPlaying: boolean;
        minutes_ago?: number;
        nowPlaying?: boolean;
        song?: string;
        artist?: string;
        artistUrl?: string;
        url?: string;
        albumImageUrl?: string;
    };
}

export default async function Spotify() {
    const data = await getToken();
    const songData = await getNowPlaying(data.access_token);
    const offlineList = [
        {
            song: "Remeber This",
            artist: "NF",
            url: "https://open.spotify.com/track/5dMKsEQSlR2ITYpScl7UMd?si=18fc1d8f9dac47c2",
            artistUrl: "https://open.spotify.com/artist/6fOMl44jA4Sp5b9PpYCkzz",
            albumImageUrl: "",
        },
        {
            song: "Flaming Hot Cheetos",
            artist: "Clairo",
            url: "https://open.spotify.com/track/1F6IbA7di42uPc3cff8PXV?si=fb29a08ded984b02",
            artistUrl: "https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag",
            albumImageUrl: "",

        },
        {
            song: "Grüne Augen Lügen nicht",
            artist: "Jeremias",
            url: "https://open.spotify.com/track/4lptrKbbydmqa74YS0a1rt?si=21b8c9e8107447db",
            artistUrl: "https://open.spotify.com/artist/011bJBtG8SdkBqBiSpBllF",
            albumImageUrl: "",
        },
        {
            song: "Chemie Chemie Ya",
            artist: "Kraftklub",
            url: "https://open.spotify.com/track/3eb1Qq8uqSDoRKib8z7vf3?si=e8118e5c477648b1",
            artistUrl: "https://open.spotify.com/artist/0MZ55DwuMQ1B2TXq9lcrE4",
            albumImageUrl: "",
        },
        {
            song: "negativer rizz",
            artist: "Ski Aggu",
            url: "https://open.spotify.com/track/1H6dj3OsebaM4Eb67fnoTg?si=8a9f8d6741e546bd",
            artistUrl: "https://open.spotify.com/artist/6CP5wWvO8oIxedESJNCN4H",
            albumImageUrl: "",
        },
    ];

    const randomSong =
        offlineList[Math.floor(Math.random() * offlineList.length)];

    return <SpotifyStats props={songData.props} randomSong={randomSong} />;
}

const getToken = async () => {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refresh_token || "",
        }).toString(),
        next: {
            revalidate: 60 * 60,
        },
    });

    if (!response.ok) {
        return {
            props: {
                isPlaying: false,
            },
        };
    }

    return await response.json();

};

const getNowPlaying = async (token: string) => {
    const nowPlaying = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            cache: "no-cache",
        }
    );

    if (nowPlaying.status === 204) {
        return {
            props: {
                isPlaying: false,
            },
        };
    } else {
        const nowPlayingData = await nowPlaying.json();

        return {
            props: {
                isPlaying: true,
                minutes_ago: Math.floor(
                    (Date.now() - nowPlayingData.timestamp) / 60
                ),
                nowPlaying: nowPlayingData.is_playing,
                song: nowPlayingData?.item?.name ? nowPlayingData.item.name : "Unknown",
                artist: nowPlayingData?.item?.artists[0]?.name || "Unknown",
                artistUrl:
                    nowPlayingData?.item?.artists[0]?.external_urls?.spotify || "",
                url: nowPlayingData?.item?.external_urls?.spotify || "",
                previewUrl: nowPlayingData?.item?.preview_url || "",
                albumImageUrl: nowPlayingData?.item?.album.images[0].url || ""
            },
        };
    }
};