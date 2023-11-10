import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import CtaBanner from "../components/CtaBanner";
import PageNavButton from "../components/PageNavButton";
import swcPoker1 from "../images/swc-poker-1.png";
import swcPoker2 from "../images/swc-poker-2.png";
import PageTitle from "../components/PageTitle";
import PlayInstructions from "../components/PlayInstructions";
import ProsAndCons from "../components/ProsAndCons";
import PhotoBanner from "../components/PhotoBanner";

function SwcPoker() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Header />
            <div className="flex flex-col items-center mt-4 text-center">
                <PageTitle
                    title="SwC Poker"
                    subtitle="Totally anonymous, Bitcoin-only, softest games, lowest rake around!"
                />
                <PhotoBanner
                    images={[swcPoker1, swcPoker2]}
                />
                <ProsAndCons
                    pros={[
                            "Completely anonymous - open to anyone anywhere. The play is soft, there's a huge variety of games, and rake is very low (including some rake-free tables!).",
                            "Fast deposits and cashouts via BTC or BCH. Player-to-player transfers available. Play on PC, Mac, or mobile."
                        ]}
                    xFactors={[
                            "You start with zero rakeback, and your percentage increases the more you play.",
                            "Interested in this site but not sure how to do the whole Bitcoin thing? Let me know."
                        ]}
                    cons={[
                            "Low traffic – currently you'll only find small amounts of MTTs, NLHE, PLO, mixed games, and OFC. Not PT/HEM-compatible."
                        ]}
                />
                <PlayInstructions
                    steps={[
                        "1) Uninstall the SwCPoker/SealswithClubs software if it's already on your computer.",
                        `2) Clear cookies in your internet browser - PLEASE! If not done properly, your account won't get tagged to me and I won't be able to help out in the future.
                            Also, I won't get paid :)<br></br>
                            <a href="https://kb.iu.edu/d/ahic">HERE'S</a> a cool page with info on how to clear cookies - you can follow its steps.`,
                        `3) Click <a href="https://swcpoker.eu/a/qhiuLFRe">here.</a>`,
                        "4) Click DOWNLOAD NOW and download the client installer.",
                        "5) Install the client, open it, click LOG IN, and click CREATE NEW ACCOUNT. In the affiliate code box please put: bigbadbabar",
                        `6) <Link to="/contact">Contact me</Link> and tell me your username, and let me know if you need help with anything!`,
                    ]}
                />
                <CtaBanner 
                    title="Need Help?"
                    bodyText={["Let me know if you need assistance with depositing, or if you have any questions, etc!"]}
                    buttonText="Contact me"
                    buttonUrl="/contact"
                />
                <div className="flex flex-row flex-wrap justify-center gap-y-2 sm:gap-20 lg:gap-96 mt-5 mb-12">
                    <PageNavButton
                        direction="left"
                        text="America's Cardroom"
                        url="/americas-cardroom"
                    />
                    <PageNavButton
                        direction="right"
                        text="Poker Bros"
                        url="/poker-bros"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SwcPoker;