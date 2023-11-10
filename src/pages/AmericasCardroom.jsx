import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import CtaBanner from "../components/CtaBanner";
import PageNavButton from "../components/PageNavButton";
import AmericasCardroom1 from "../images/americas-cardroom-1.png";
import AmericasCardroom2 from "../images/americas-cardroom-2.jpeg";
import PhotoBanner from "../components/PhotoBanner";
import PageTitle from "../components/PageTitle";
import PlayInstructions from "../components/PlayInstructions";
import ProsAndCons from "../components/ProsAndCons";

function AmericasCardroom() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Header />
            <div className="flex flex-col items-center mt-4 text-center">
                <PageTitle
                    title="America's Cardroom"
                    subtitle="Big traffic, high stakes, huge tournaments, wide variety of games!"
                />
                <PhotoBanner
                    images={[AmericasCardroom1, AmericasCardroom2]}
                />
                <ProsAndCons
                    pros={[
                            "High traffic - tons of NLHE and PLO and SNG/MTTs (some with huge prizepools), and a smaller amount of PLO8, Stud, Stud8, LHE, and LO8.",
                            "Player-to-player transfers available. Deposit with credit card, cryptos, or via transfer. Withdraw by check, Moneygram, cryptos, or via transfer.",
                            "PT/HEM compatible. First deposit bonus is 100% up to $2000 and clears at an okay rate. There are big rake races for cash games (The Beast) and SNGs (Sit & Crush). Play on PC, Mac, or mobile."
                        ]}
                    xFactors={[
                            "There are two rewards plans: VIP and rakeback. If you're a grinder (raking over ~$1500/month), choose the VIP plan. You earn points, trade them for cash, and those rewards (rakeback) can be 30%, 40% or more!",
                            "If you don't play a ton, pick the rakeback plan to get a flat 27%."
                        ]}
                    cons={[
                            "All the rewards and promos mean the cash games can be tough and full of grinders.",
                            "Sadly, these states are not allowed:  DE, KY, LA, MD, NJ, NV, WA."
                        ]}
                />
                <PlayInstructions
                    steps={[
                        "1) Uninstall the ACR/BCP/True software if it's already on your computer.",
                        `2) Clear cookies in your internet browser - PLEASE! If not done properly, your account won't get tagged to me and I won't be able to help out in the future.
                            Also, I won't get paid :)
                            <a href="https://kb.iu.edu/d/ahic">HERE'S</a> a cool page with info on how to clear cookies - you can follow its steps.`,
                        `3) If you already have one, please make a BCP account instead (different skin, same network; everything's the same). If you have BCP too, then please make a True account (same deal).
                            <br></br>
                            For ACR RAKEBACK, click <a href="http://record.secure.acraffiliates.com/_zhTez3o4cs_X172zxPL8HmNd7ZgqdRLk/1/">here.</a>
                            <br></br>
                            For ACR VIP PLAN, click <a href="http://record.secure.acraffiliates.com/_zhTez3o4cs_liGzWYUsF-2Nd7ZgqdRLk/1/">here.</a>
                            <br></br>
                            For BCR RAKEBACK, click <a href="http://record.blackchippoker.eu/_u_j-I8bm5PfjiPWJ9pQO92Nd7ZgqdRLk/1">here.</a>
                            <br></br>
                            For BCR VIP PLAN, click <a href="http://record.blackchippoker.eu/_u_j-I8bm5Pc2uW858WQIo2Nd7ZgqdRLk/1">here.</a>
                            <br></br>
                            For True RAKEBACK, click <a href="http://record.secure.truepokeraffiliates.com/_1P2MudXIY7AWqcfzuvZcQGNd7ZgqdRLk/1/">here.</a>
                            <br></br>
                            For True VIP PLAN, click <a href="http://record.secure.truepokeraffiliates.com/_1P2MudXIY7DUOsjNOfgKeWNd7ZgqdRLk/1/">here.</a>
                            <br></br>`,
                            "4) On the page that opens, click the red DOWNLOAD NOW (or PLAY POKER NOW) button. The poker installer will start to download.",
                            "5) Once the installer is downloaded, use it to install ACR/BCP/True Poker on your computer.",
                            `6) <Link to="/contact">Contact me</Link> and tell me what email and username you signed up with, so I can verify it on my end.`,
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
                        text="Ignition Casino"
                        url="/ignition-casino"
                    />
                    <PageNavButton
                        direction="right"
                        text="SwC Poker"
                        url="/swc-poker"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AmericasCardroom;