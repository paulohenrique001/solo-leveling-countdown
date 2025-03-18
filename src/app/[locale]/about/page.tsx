import React, {Fragment} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useTranslations} from "next-intl";

export default function Page() {
    const viewAbout = useTranslations('view-about');

    return (
        <Fragment>
            <Header/>
            <main className="view-about-bg">
                <div className="w-full max-w-[800px] mx-auto z-[1]">
                    <h1 className="glitch text-2xl text-center font-bold">{viewAbout('title')}</h1>
                </div>
                <video id="background-video" autoPlay loop muted playsInline>
                    <source src="/videos/background.mp4" type="video/mp4"/>
                </video>
            </main>
            <Footer/>
        </Fragment>
    );
}
