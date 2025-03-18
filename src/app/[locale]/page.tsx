import React, {Fragment} from "react";
import {useTranslations} from 'next-intl';
import CountDown from "@/components/CountDown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
    const t = useTranslations('view-home');

    console.log(t('title'));

    return (
        <Fragment>
            <Header/>
            <main className="view-home-bg">
                <div className="w-full max-w-[800px] mx-auto z-[1]">
                    <CountDown targetDate="2025-03-22T13:30:00"/>
                </div>
            </main>
            <Footer/>
        </Fragment>
    );
}
