"use client";

import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";

interface CountdownProps {
    targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({targetDate}) => {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const router = useRouter();
    const viewHome = useTranslations('view-home');

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const target = new Date(targetDate);
            const difference = target.getTime() - now.getTime();

            if (difference <= 0) {
                router.push('https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling');
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        };

        const interval = setInterval(updateCountdown, 1000);

        updateCountdown();

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex justify-center items-center p-4 text-gray-200 font-monospace">
            <div className="w-full grid grid-cols-4 gap-4">
                <div className={`${days === 0 ? 'glitch' : ''} col-span-4 rounded-lg shadow-lg system-bg`}>
                    <div className="h-[7rem] flex flex-col justify-center items-center">
                        <span className="text-[1.3rem] md:text-[2rem] font-bold animate-pulse">{days} {viewHome('days')}</span>
                    </div>
                </div>
                <div className={`${hours === 0 ? 'glitch' : ''} col-span-2 rounded-lg shadow-lg system-bg`}>
                    <div className="h-[7rem] flex flex-col justify-center items-center">
                        <span className="text-[1.3rem] md:text-[2rem] font-bold animate-pulse">{hours} {viewHome('hours')}</span>
                    </div>
                </div>
                <div
                    className={`${minutes === 0 ? 'glitch' : ''} col-span-2 rounded-lg shadow-lg system-bg`}>
                    <div className="h-[7rem] flex flex-col justify-center items-center">
                        <span className="text-[1.3rem] md:text-[2rem] font-bold animate-pulse">{minutes} {viewHome('minutes')}</span>
                    </div>
                </div>
                <div className="col-span-4 rounded-lg shadow-lg system-bg">
                    <div className="h-[7rem] flex flex-col justify-center items-center">
                        <span className="text-[1.3rem] md:text-[2rem] font-bold animate-pulse">{seconds} {viewHome('seconds')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
