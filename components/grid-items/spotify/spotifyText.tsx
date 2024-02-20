"use client";


// @ts-ignore
import {AutoTextSize} from "auto-text-size";

const SpotifyText = ({ children }: { children: string }) => {
    return (
        <AutoTextSize
            mode="oneline"
            className=" leading-5  font-bold"
            maxFontSizePx={20}
        >
            {children}
        </AutoTextSize>
    );
};

export default SpotifyText;