import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import CtaBanner from "../components/CtaBanner";
import PageNavButton from "../components/PageNavButton";
import kingsClub1 from "../images/kings-club-poker-1.png";
import kingsClub2 from "../images/kings-club-poker-2.png";

function Pokerrrr2() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Header />
            <div className="flex flex-col items-center mt-4 text-center">
                <div className="max-w-5xl">
                    <h1 className="block text-center font-title text-dark font-bold">
                        Kings Club Poker
                    </h1>
                    <h3 className="mt-2 font-body">
                        Agent site, smooth software, best place to learn and play mixed games!
                    </h3>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-10 w-full my-2 py-4 lg:px-20 px-auto bg-dark/30 lg:bg-transparent lg:bg-gradient-to-r from-dark/10 from-10% via-dark/30 to-dark/10 to-90%">
                    <img src={kingsClub1} className="col-span-2 lg:col-span-1 place-self-center lg:place-self-end lg:mx-0 w-full h-full sm:h-[300px] sm:w-[500px] shadow" />
                    <img src={kingsClub2} className="col-span-2 lg:col-span-1 place-self-center lg:place-self-start lg:mx-0 w-full h-full sm:h-[300px] sm:w-[500px] shadow" />
                </div>
                <div className="grid grid-cols-3 gap-y-5 max-w-6xl my-5 md:mx-16 text-left">
                    <Informational
                        title="Pros" 
                        content={[
                            "Smooth browser-based software - no download needed - play on any device! Lots of mixed games - both limit and big bet - basically everything you can think of.",
                            "There are low-stakes tables specifically for beginners, so you can learn in a welcoming environment."
                        ]}
                        maxColumns={3}
                    />
                    <Informational 
                        title="X-factors" 
                        content={[
                            "KingsClub uses the agent model - it's essentially a private site - and the only way to gain access is to have an agent (like me) sign you up.",
                            "Everything is directly between you and your agent: rakeback, deposits, withdrawals, etc."
                        ]}
                        maxColumns={3}
                    />
                    <Informational 
                        title="Cons" 
                        content={[
                            "If you don't enjoy mixed games, there's not a lot to play.",
                            "Not PT/HEM compatible."
                        ]}
                        maxColumns={3}
                    />
                </div>
                <div className="md:mx-16">
                    <h3 className="font-title">
                        Ready to play?
                    </h3>
                    <h5 className="max-w-4xl mx-auto mt-2 font-body font-bold">
                        Follow these steps to create your account.
                    </h5>
                    <ol className="max-w-4xl mx-auto mb-5 text-left font-body text-dark text-lg">
                        <li className="my-4">
                            1) <Link to="/contact">Contact me</Link> and we'll get you started!  There's no obligation - once your account is created, you can scout out the traffic and then deposit if/when you're good to go!
                        </li>
                    </ol>
                </div>
                <CtaBanner 
                    title="Need Help?"
                    content={["Let me know if you need assistance with depositing, or if you have any questions, etc!"]}
                    call="Contact me"
                    actionURL="/contact"
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