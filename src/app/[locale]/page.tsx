import React, {Fragment} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountDown from "@/components/CountDown";

export default function Home() {
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
