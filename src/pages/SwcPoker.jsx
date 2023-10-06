import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Informational from "../components/Informational";
import ActionBanner from "../components/ActionBanner";
import PageNavButton from "../components/PageNavButton";
import swcPoker1 from "../images/swc-poker-1.png";
import swcPoker2 from "../images/swc-poker-2.png";

function SwcPoker() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Header />
            <div className="flex flex-col items-center mt-4 text-center">
                <div className="max-w-5xl">
                    <h1 className="block text-center font-title text-dark font-bold">
                        SwC Poker
                    </h1>
                    <h3 className="mt-2 font-body">
                        Totally anonymous, Bitcoin-only, softest games, lowest rake around!
                    </h3>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-10 w-full my-2 py-4 lg:px-20 px-auto bg-dark/30 lg:bg-transparent lg:bg-gradient-to-r from-dark/10 from-10% via-dark/30 to-dark/10 to-90%">
                    <img src={swcPoker1} className="col-span-2 lg:col-span-1 place-self-center lg:place-self-end lg:mx-0 w-full h-full sm:h-[300px] sm:w-[500px] shadow" />
                    <img src={swcPoker2} className="col-span-2 lg:col-span-1 place-self-center lg:place-self-start lg:mx-0 w-full h-full sm:h-[300px] sm:w-[500px] shadow" />
                </div>
                <div className="grid grid-cols-3 gap-y-5 max-w-6xl my-5 md:mx-16 text-left">
                    <Informational
                        title="Pros" 
                        content={[
                            "Completely anonymous - open to anyone anywhere. The play is soft, there's a huge variety of games, and rake is very low (including some rake-free tables!).",
                            "Fast deposits and cashouts via BTC or BCH. Player-to-player transfers available. Play on PC, Mac, or mobile."
                        ]}
                        maxColumns={3}
                    />
                    <Informational 
                        title="X-factors" 
                        content={[
                            "You start with zero rakeback, and your percentage increases the more you play.",
                            "Interested in this site but not sure how to do the whole Bitcoin thing? Let me know."
                        ]}
                        maxColumns={3}
                    />
                    <Informational 
                        title="Cons" 
                        content={[
                            "Low traffic – currently you'll only find small amounts of MTTs, NLHE, PLO, mixed games, and OFC. Not PT/HEM-compatible."
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
                            1) Uninstall the SwCPoker/SealswithClubs software if it's already on your computer.
                        </li>
                        <li className="my-4">
                            2) Clear cookies in your internet browser - PLEASE! If not done properly, your account won't get tagged to me and I won't be able to help out in the future.
                            Also, I won't get paid :)<br></br>
                            <a href="https://kb.iu.edu/d/ahic">HERE'S</a> a cool page with info on how to clear cookies - you can follow its steps.
                        </li>
                        <li className="my-4">
                            3) Click <a href="https://swcpoker.eu/a/qhiuLFRe">here.</a>
                        </li>
                        <li className="my-4">
                            4) Click DOWNLOAD NOW and download the client installer.
                        </li>
                        <li className="my-4">
                            5) Install the client, open it, click LOG IN, and click CREATE NEW ACCOUNT. In the affiliate code box please put: bigbadbabar
                        </li>
                        <li className="my-4">
                            6) <Link to="/contact">Contact me</Link> and tell me your username, and let me know if you need help with anything!
                        </li>
                    </ol>
                </div>
                <ActionBanner 
                    title="Need Help?"
                    content={["Let me know if you need assistance with depositing, or if you have any questions, etc!"]}
                    call="Contact me"
                    actionURL="/contact"
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