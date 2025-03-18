'use client'

import React, {useEffect, useState} from 'react';

const Header: React.FC = () => {
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
        <header className="ui-header">
            <div className="max-w-[1280px] mx-auto p-4 flex justify-between items-center text-3xl text-white">
                <div className="font-bold text-2xl">JINWOO VS BERU</div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <button onClick={togglePlayback}
                                    className={`mdi ${muted ? "mdi-volume-off" : "mdi-volume-high"} cursor-pointer z-[999]`}/>
                        </li>
                    </ul>
                </nav>
            </div>
            <audio id="playback">
                <source src="/audio/dark-aria.mp3" type="audio/mp3"/>
            </audio>
        </header>
    );
};

export default Header;
