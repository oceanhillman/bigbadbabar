import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import PageNavButton from "../components/PageNavButton";

function OnlinePoker() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 self-center max-w-4xl">
                <div className="flex flex-col items-center mt-4 text-center">
                    <h1 className="text-center font-title text-dark font-bold">
                        Play Online Poker
                    </h1>
                    <Informational 
                        content={[
                            "You may have heard otherwise, but online poker is legal in the USA!",
                            "Different states allow different sites, and there are lots of good options for everyone, whether you're a serious grinder, weekend warrior, or just getting started.",
                            "I trust the sites I recommend -- I think they're safe, and I have my own money on all of them.",
                            "I have a page for each site, with info and signup instructions. As always, please contact me with any questions.​​",
                            "Click the button below to begin!​​"
                        ]}
                        maxColumns={1}
                    />
                    <div className="flex justify-between mt-4 mb-2">
                        <PageNavButton
                            direction="right"
                            text="Ignition Casino"
                            url="/ignition-casino"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OnlinePoker;