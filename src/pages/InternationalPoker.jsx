import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import CtaBanner from "../components/CtaBanner";
import PageNavButton from "../components/PageNavButton";
import bodog from "../images/bodog.png";
import ignitionCasino from "../images/ignition-casino-1.png";
import PageTitle from "../components/PageTitle";
import PlayInstructions from "../components/PlayInstructions";
import ProsAndCons from "../components/ProsAndCons";
import PhotoBanner from "../components/PhotoBanner";

function InternationalPoker() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Header />
            <div className="flex flex-col items-center mt-4 text-center">
                <PageTitle
                    title="International Poker"
                    subtitle="Bodog is your best option if you are in Argentina, Bolivia, Brasil, Canada, Chile, Colombia, Mexico, Peru, or Venezuela!"
                />
                <PhotoBanner
                    images={[bodog, ignitionCasino]}
                />
                <ProsAndCons
                    pros={[
                            "3rd biggest poker site in the world - lots of NLHE, PLO, and MTTs/SNGs, and it's one of the few sites with good traffic for less-popular games like LHE and PLO8.",
                            "Bodog's games are softer than almost anywhere else! It also has very fast cashouts, with checks taking about a week and Bitcoin taking only a few days.",
                            "There's a 100% up to $1000 first deposit poker bonus or a 100% up to $1000 casino deposit bonus. They offer a “fast” poker variant, called Zone Poker.",
                            "You can play Bodog on PC, Mac, or mobile devices, and they also have a sportsbook and an online casino. They have p2p transfers too."
                        ]}
                    xFactors={[
                            "The anonymous software - the whole site is set up this way. There are no usernames and you can't track individual players across tables or sessions.",
                            "Some folks don’t like the anonymous setup but I think it's actually a positive, as it helps protect the ecosystem and keeps the games healthy.",
                            "Players can’t target or chase each other, so there is less predatory behavior than on other sites. This means that games break less often and there are always juicy tables for you!",
                            "Bitcoin is your best bet for deposit/withdrawal and Bodog is offering bonuses to encourage people to move in that direction. You can deposit with credit/debit card (if you have trouble, try Netspend prepaid card) as well as Western Union."
                        ]}
                    cons={[
                            "There’s no rakeback, so make sure to max out that first deposit bonus.",
                            "The software is a bit slow, and you can only play up to 4 cash tables at a time.",
                            "Currently, only Argentina, Bolivia, Brasil, Canada, Chile, Colombia, Mexico, Peru, and Venezuela are allowed."
                        ]}
                />
                <PlayInstructions
                    steps={[
                        "1) Uninstall the Bodog software if it's already on your computer.",
                        `2) Clear cookies in your internet browser - PLEASE! If not done properly, your account won't get tagged to me and I won't be able to help out in future.
                            Also, I won't get paid :) <a href="https://kb.iu.edu/d/ahic">HERE'S</a> a cool page with info on how to clear cookies - you can follow its steps.`,
                        `3) From the Americas? Click <a href="https://record.revenuenetwork.com/_T36naG1FXVswWvMTvVKr0mNd7ZgqdRLk/777/">here.</a>
                            From Australia? Check out <a href="https://record.revenuenetwork.com/_T36naG1FXVvbLeaHRVCThWNd7ZgqdRLk/777/">Ignition.</a>`,
                        "4) On the page that opens, click JOIN NOW. On the next page, put in your info and click OPEN ACCOUNT.",
                        "5) Download and install Bodog onto your computer.",
                        `6) <Link to="/contact">Contact me</Link> and tell me you made an account, and I'll look out for it on my end.`
                    ]}
                />
                <CtaBanner 
                    title="Need Help?"
                    bodyText={["Let me know if you need assistance with depositing, or if you have any questions, etc!"]}
                    buttonText="Contact me"
                    buttonUrl="/contact"
                />
                <div className="flex justify-between mt-4 mb-2">
                    <PageNavButton
                        direction="left"
                        text="Kings Club Poker"
                        url="/kings-club-poker"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default InternationalPoker;