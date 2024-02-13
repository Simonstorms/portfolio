"use client";


// @ts-ignore
import {AutoTextSize} from "auto-text-size";

const SpotifyText = ({ children }: { children: string }) => {
    return (
        <AutoTextSize
            mode="oneline"
            className=" leading-3 text-xl font-bold"
            maxFontSizePx={20}
        >
            {children}
        </AutoTextSize>
    );
};

export default SpotifyText;