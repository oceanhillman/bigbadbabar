import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import CtaBanner from "../components/CtaBanner";
import PageNavButton from "../components/PageNavButton";
import pokerrrr21 from "../images/pokerrrr2-1.png";
import pokerrrr22 from "../images/pokerrrr2-2.png";
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
                    title="Pokerrrr 2"
                    subtitle="Agent site, amazing games, feels more like live poker!"
                />
                <PhotoBanner
                    images={[pokerrrr21, pokerrrr22]}
                    captions={["Pokerrrr2 - Lobby", "Pokerrrr2 - Game Interface"]}
                />
                <ProsAndCons
                    pros={[
                            `Super good games! Fun "live poker" interface where you "peel" your cards and "swipe" your chips (some people find this weird, but I think it's a main reason the games are great).`,
                            `Play on any mobile device. Mainly PLO, some PLO8 and NLHE.`,
                            `There are many different clubs to choose from, and each one offers different promotions and different games/stakes.`
                        ]}
                    xFactors={[
                            "Pokerrrr2 uses the agent model - it's essentially a private site - and the only way to gain access is to have an agent (like me) sign you up.",
                            "Everything is directly between you and your agent: rakeback, deposits, withdrawals, etc."
                        ]}
                    cons={[
                            "You can only play 1 table per device. To play on a PC, you have to use an emulator.",
                            "Not HEM/PT/tracker compatible. Multi-tabling is possible, but difficult: you'll need multiple devices, or multiple emulator windows running at once."
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
                        text="Poker Bros"
                        url="/poker-bros"
                    />
                    <PageNavButton
                        direction="right"
                        text="Kings Club Poker"
                        url="/kings-club-poker"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pokerrrr2;