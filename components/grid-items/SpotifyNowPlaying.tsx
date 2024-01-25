import clsx from 'clsx';
import * as React from 'react';
import { SiSpotify } from 'react-icons/si';
import useSWR from 'swr';



import UnstyledLink, {
    UnstyledLinkProps,
} from '@/components/UnstyledLink';

import { SpotifyData } from '@/config/spotify';
import NextImage from "@/components/NextImage";

export default function Spotify({
                                    className,
                                    ...rest
                                }: Omit<UnstyledLinkProps, 'href' | 'children'>) {
    const { data } = useSWR<SpotifyData>('/api/SpotifyAPI');

    return data?.isPlaying ? (
        <figure className={className} data-cy='spotify'>

                <UnstyledLink
                    {...rest}
                    href={data.songUrl}
                    className={clsx(
                        'relative flex items-center gap-4 p-3',
                        'border dark:border-gray-600',
                        'border-thin w-72 rounded-md',
                        'shadow-sm dark:shadow-none',
                        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
                    )}
                >
                    <NextImage
                        useSkeleton
                        className='w-16 shadow-sm dark:shadow-none'
                        src={data.albumImageUrl}
                        alt={data.album}
                        width={640}
                        height={640}
                        unoptimized
                    />
                    <div className='flex-1'>
                        <p className='text-sm font-medium'>{data.title}</p>
                        <p className='mt-1 text-xs text-gray-600 dark:text-gray-300'>
                            {data.artist}
                        </p>
                    </div>
                    <div className='absolute bottom-1.5 right-1.5'>
                        <SiSpotify size={20} color='#1ED760' />
                    </div>
                </UnstyledLink>

        </figure>
    ) : null;
}