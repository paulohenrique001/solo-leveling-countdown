import React, {Fragment} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useTranslations} from "next-intl";
import Link from "next/link";

export default function Page() {
    const viewAbout = useTranslations('view-about');

    return (
        <Fragment>
            <Header/>
            <main className="view-about-bg">
                <div className="w-full max-w-[800px] mx-auto z-[1]">
                    <div className="text-4xl text-center text-white font-bold font-monospace mb-2">
                        <h1>{viewAbout('title')}</h1>
                        <h2>PAULO HENRIQUE</h2>
                    </div>
                    <div className="flex justify-center gap-2 text-5xl text-white mb-10">
                        <Link href="https://github.com/paulohenrique001" target="_blank"
                              className="hover:text-blue-800">
                            <i className="mdi mdi-github"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/paulohenrique001/" target="_blank"
                              className="hover:text-blue-800">
                            <i className="mdi mdi-linkedin"/>
                        </Link>
                        <Link href="https://www.instagram.com/paulohenrique001br" target="_blank"
                              className="hover:text-blue-800">
                            <i className="mdi mdi-instagram"/>
                        </Link>
                    </div>
                    <div className="text-white text-center">
                        <span>{viewAbout('assets')} </span>
                        <Link href="https://sololeveling.netmarble.com/pt" target="_blank" className="text-blue-500">Netmarble</Link>
                    </div>
                </div>
                <video id="background-video" autoPlay loop muted playsInline>
                    <source src="/videos/background.mp4" type="video/mp4"/>
                </video>
            </main>
            <Footer/>
        </Fragment>
    );
}
