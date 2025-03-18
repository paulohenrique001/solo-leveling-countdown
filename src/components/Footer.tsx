'use client'

import React, {useEffect, useState} from 'react';
import {Link} from "@/i18n/navigation";

const Footer: React.FC = () => {
    const [muted, setMuted] = useState<boolean>(true);
    const [playback, setPlayback] = useState<HTMLAudioElement | null>(null);

    const togglePlayback = () => {
        if (playback) {
            if (playback.paused) {
                playback.play()
                    .then(() => setMuted(false))
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                playback.muted = !playback.muted;
                setMuted(playback.muted);
            }
        }
    }

    useEffect(() => {
        const playback = document.getElementById("playback") as HTMLAudioElement;

        if (playback) {
            playback.loop = true;
            playback.volume = 0.5;
            playback.currentTime = 19.5;

            setPlayback(playback);
        }
    }, []);

    return (
        <footer className="ui-footer">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex justify-between items-center p-4 text-2xl text-white font-bold">
                    <Link href="/about" className="cursor-pointer z-[999]">
                        <i className="mdi mdi-help"/>
                    </Link>
                    <button onClick={togglePlayback}
                            className={`mdi ${muted ? "mdi-volume-off" : "mdi-volume-high"} cursor-pointer z-[999]`}/>
                </div>
            </div>
            <audio id="playback">
                <source src="/audio/dark-aria.mp3" type="audio/mp3"/>
            </audio>
        </footer>
    );
};

export default Footer;
