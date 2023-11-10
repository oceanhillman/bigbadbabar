import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import CtaBanner from "../components/CtaBanner";
import PageNavButton from "../components/PageNavButton";
import pokerBros1 from "../images/poker-bros-1.png";
import pokerBros2 from "../images/poker-bros-2.png";
import PageTitle from "../components/PageTitle";
import PlayInstructions from "../components/PlayInstructions";
import ProsAndCons from "../components/ProsAndCons";
import PhotoBanner from "../components/PhotoBanner";

function PokerBros() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Header />
            <div className="flex flex-col items-center mt-4 text-center">
                <PageTitle
                    title="Poker Bros"
                    subtitle="Agent site, big traffic, good games, great software...all-around winner!"
                />
                <PhotoBanner
                    images={[pokerBros1, pokerBros2]}
                />
                <ProsAndCons
                    pros={[
                            "Lots of traffic, clean interface, PT/HEM/tracker compatible. Play on any mobile device. Lots of NLHE, PLO, and SNG/MTT."
                        ]}
                    xFactors={[
                            "PokerBros uses the agent model - it's essentially a private site - and the only way to gain access is to have an agent (like me) sign you up.",
                            "Everything is directly between you and your agent: rakeback, deposits, withdrawals, etc."
                        ]}
                    cons={[
                            "You can only play 4 tables maximum. To play on a PC, you have to use an emulator."
                        ]}
                />
                <PlayInstructions
                    steps={[
                        `1) <Link to="/contact">Contact me</Link> and we'll get you started!  There's no obligation - once your account is created, you can scout out the traffic and then deposit if/when you're good to go!`,
                        `2) Alternatively, try this link and create a new account <a href="https://i.pokerbros.net/7UOalEuDQtb">here.</a>`,
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
                        text="SwC Poker"
                        url="/swc-poker"
                    />
                    <PageNavButton
                        direction="right"
                        text="Pokerrrr 2"
                        url="/pokerrrr-2"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PokerBros;