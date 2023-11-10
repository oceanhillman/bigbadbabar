import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import CtaBanner from "../components/CtaBanner";
import PageNavButton from "../components/PageNavButton";
import kingsClub1 from "../images/kings-club-poker-1.png";
import kingsClub2 from "../images/kings-club-poker-2.png";
import PageTitle from "../components/PageTitle";
import PlayInstructions from "../components/PlayInstructions";
import ProsAndCons from "../components/ProsAndCons";
import PhotoBanner from "../components/PhotoBanner";

function Pokerrrr2() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Header />
            <div className="flex flex-col items-center mt-4 text-center">
                <PageTitle
                    title="Kings Club Poker"
                    subtitle="Agent site, smooth software, best place to learn and play mixed games!"
                />
                <PhotoBanner
                    images={[kingsClub1, kingsClub2]}
                />
                <ProsAndCons
                    pros={[
                            "Smooth browser-based software - no download needed - play on any device! Lots of mixed games - both limit and big bet - basically everything you can think of.",
                            "There are low-stakes tables specifically for beginners, so you can learn in a welcoming environment."
                        ]}
                    xFactors={[
                            "KingsClub uses the agent model - it's essentially a private site - and the only way to gain access is to have an agent (like me) sign you up.",
                            "Everything is directly between you and your agent: rakeback, deposits, withdrawals, etc."
                        ]}
                    cons={[
                            "If you don't enjoy mixed games, there's not a lot to play.",
                            "Not PT/HEM compatible."
                        ]}
                />
                <PlayInstructions
                    steps={[
                        `1) <Link to="/contact">Contact me</Link> and we'll get you started!  There's no obligation - once your account is created, you can scout out the traffic and then deposit if/when you're good to go!`
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
                        text="Pokerrrr 2"
                        url="/pokerrrr-2"
                    />
                    <PageNavButton
                        direction="right"
                        text="International Poker"
                        url="/international"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pokerrrr2;