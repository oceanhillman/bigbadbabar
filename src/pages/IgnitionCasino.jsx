import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import CtaBanner from "../components/CtaBanner";
import PageNavButton from "../components/PageNavButton";
import ProsAndCons from "../components/ProsAndCons";
import IgnitionCasino1 from "../images/ignition-casino-1.png";
import IgnitionCasino2 from "../images/ignition-casino-2.png";
import PhotoBanner from "../components/PhotoBanner";
import PageTitle from "../components/PageTitle";
import PlayInstructions from "../components/PlayInstructions";

function IgnitionCasino() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Header />
            <div className="flex flex-col items-center mt-4 text-center">
                <PageTitle
                    title="Ignition Casino"
                    subtitle="Best traffic, soft games, excellent first deposit bonus...the top spot!"
                />
                <PhotoBanner
                    images={[IgnitionCasino1, IgnitionCasino2]}
                />
                <ProsAndCons
                    pros={[
                            "Great traffic - tons of NLHE and PLO and MTTs/SNGs, some PLO8, and it's the only USA-facing site with good traffic in my favorite game, LHE. Ignition has the softest games around, and lots of them.",
                            "Player-to-player transfers available. Deposit and withdraw using MatchPay (intriguing option which lets you use your e-wallets), cryptos, or transfers. First deposit bonus is 100% up to $1500 and clears at a good rate. Play on PC, Mac, or mobile."
                        ]}
                    xFactors={[
                            "The anonymous tables - a hallmark of this network. There are no usernames, you can't track individual players over time, and PT/HEM won't help much.",
                            "Some pros don't like this, but overall I believe it's a net positive: this setup protects recreational players and keeps the ecosystem healthy.",
                        ]}
                    cons={[
                            "There’s no rakeback, and few bonuses, so make sure to max out that first deposit bonus.",
                            "You can only play 4 cash tables maximum, but can add up to 11 MTT tables to that.",
                            "Sadly, some states are not allowed:  DE, MD, NJ, NV, NY."
                        ]}
                />
                <PlayInstructions
                    steps={[
                        "1) Uninstall the Ignition software if it's already on your computer.",
                        `2) Clear cookies in your internet browser - PLEASE! If not done properly, your account won't get tagged to me and I won't be able to help out in future.
                            Also, I won't get paid :) <a href="https://kb.iu.edu/d/ahic">HERE'S</a> a cool page with info on how to clear cookies - you can follow its steps.`,
                        `3) If you already have an Ignition account, make a Bovada account <a href="https://record.revenuenetwork.com/_T36naG1FXVs0pFR4DLB4NGNd7ZgqdRLk/777/">here.</a> Otherwise, click <a href="https://record.revenuenetwork.com/_T36naG1FXVvrYxrLfbn0SGNd7ZgqdRLk/777/">here.</a>`,
                        "4) On the page that opens, click JOIN NOW. On the next page, put in your info and click OPEN ACCOUNT.",
                        "5) Download and install Ignition / Bovada onto your computer.",
                        `6) <Link to="/contact">Contact me</Link> and tell me you made an account, and I'll look out for it on my end.`
                    ]}
                />
                <CtaBanner 
                    title="Need help?"
                    bodyText={["Let me know if you need assistance with depositing, or if you have any questions, etc!"]}
                    buttonText="Contact me"
                    buttonUrl="/contact"
                />
                <div className="flex flex-row flex-wrap justify-center gap-y-2 mobile-s:gap-1 tablet:gap-20 desktop:gap-96 mt-5">
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