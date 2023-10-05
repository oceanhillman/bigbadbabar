import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import PageNavButton from "../components/PageNavButton";
import IgnitionCasino1 from "../images/ignition-casino-1.png";
import IgnitionCasino2 from "../images/ignition-casino-2.png";
import ActionBanner from "../components/ActionBanner";

function IgnitionCasino() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Header />
            <div className="flex flex-col items-center mt-4 text-center">
                <div className="max-w-5xl">
                    <h1 className="block text-center font-title text-dark font-bold">
                        Ignition Casino
                    </h1>
                    <h3 className="mt-2 font-body">
                        Big traffic, high stakes, huge tournaments, wide variety of games!
                    </h3>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-10 w-full my-4 py-4 lg:px-20 px-auto bg-dark/30 lg:bg-transparent lg:bg-gradient-to-r from-dark/10 from-10% via-dark/30 to-dark/10 to-90%">
                    <img src={IgnitionCasino1} className="col-span-2 lg:col-span-1 place-self-center lg:place-self-end lg:mx-0 w-full h-full sm:h-[300px] sm:w-[500px] shadow" />
                    <img src={IgnitionCasino2} className="col-span-2 lg:col-span-1 place-self-center lg:place-self-start lg:mx-0 w-full h-full sm:h-[300px] sm:w-[500px] shadow" />
                </div>
                <div className="grid grid-cols-3 max-w-6xl py-4 text-left">
                    <Informational
                        title="Pros" 
                        content={[
                            "Great traffic - tons of NLHE and PLO and MTTs/SNGs, some PLO8, and it's the only USA-facing site with good traffic in my favorite game, LHE. Ignition has the softest games around, and lots of them.",
                            "Player-to-player transfers available. Deposit and withdraw using MatchPay (intriguing option which lets you use your e-wallets), cryptos, or transfers. First deposit bonus is 100% up to $1500 and clears at a good rate. Play on PC, Mac, or mobile."
                        ]}
                        maxColumns={3}
                    />
                    <Informational 
                        title="X-factors" 
                        content={[
                            "The anonymous tables - a hallmark of this network. There are no usernames, you can't track individual players over time, and PT/HEM won't help much.",
                            "Some pros don't like this, but overall I believe it's a net positive: this setup protects recreational players and keeps the ecosystem healthy.",
                        ]}
                        maxColumns={3}
                    />
                    <Informational 
                        title="Cons" 
                        content={[
                            "There’s no rakeback, and few bonuses, so make sure to max out that first deposit bonus.",
                            "You can only play 4 cash tables maximum, but can add up to 11 MTT tables to that.",
                            "Sadly, some states are not allowed:  DE, MD, NJ, NV, NY."
                        ]}
                        maxColumns={3}
                    />
                </div>
                <div className="mx-auto">
                    <h3 className="font-title">
                        Ready to play?
                    </h3>
                    <h5 className="max-w-4xl mx-auto mt-2 font-body font-bold">
                        Follow these steps to create your account.
                    </h5>
                    <ol className="max-w-4xl mx-auto text-left font-body text-dark text-lg">
                        <li className="my-4">
                            1) Uninstall the Ignition software if it's already on your computer.
                        </li>
                        <li className="my-4">
                            2) Clear cookies in your internet browser - PLEASE! If not done properly, your account won't get tagged to me and I won't be able to help out in future.
                            Also, I won't get paid :) <a href="https://kb.iu.edu/d/ahic">HERE'S</a> a cool page with info on how to clear cookies - you can follow its steps.
                        </li>
                        <li className="my-4">
                            3) If you already have an Ignition account, make a Bovada account <a href="https://record.revenuenetwork.com/_T36naG1FXVs0pFR4DLB4NGNd7ZgqdRLk/777/">here.</a> Otherwise, click <a href="https://record.revenuenetwork.com/_T36naG1FXVvrYxrLfbn0SGNd7ZgqdRLk/777/">here.</a>
                        </li>
                        <li className="my-4">
                            4) On the page that opens, click JOIN NOW. On the next page, put in your info and click OPEN ACCOUNT.
                        </li>
                        <li className="my-4">
                            5) Download and install Ignition / Bovada onto your computer.
                        </li>
                        <li className="my-4">
                            6) <Link to="/contact">Contact me</Link> and tell me you made an account, and I'll look out for it on my end.
                        </li>
                    </ol>
                </div>
                <ActionBanner 
                    title="Need Help?"
                    content={["Let me know if you need assistance with depositing, or if you have any questions, etc!"]}
                    call="Contact me"
                    actionURL="/contact"
                />
                <div className="flex flex-row flex-wrap justify-center gap-y-2 sm:gap-20 mt-5 mb-12">
                    <PageNavButton
                        direction="left"
                        text="Play Online Poker"
                        url="/online-poker"
                    />
                    <PageNavButton
                        direction="right"
                        text="America's Cardroom"
                        url="/americas-cardroom"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default IgnitionCasino;