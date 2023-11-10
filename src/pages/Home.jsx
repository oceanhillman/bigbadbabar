import Header from "../components/Header";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import Testimonial from "../components/Testimonial";
import Informational from "../components/Informational";

function Home() {
    return (
        <div className="flex flex-col min-h-screen max-w-screen">
            <Header />
            <div className="desktop:mt-4 mb-4">
                <CtaBanner 
                    title={"Welcome!"}
                    bodyText={[
                        "Welcome to the site. It's 2023 and we're still doing this internet poker thing!",
                        "You've come to the right place for info and resources. I've been at this since 2006 and I know what's up.",
                        "We've got you covered with classic sites and new offerings.",
                    ]}
                    buttonText="Play Online Poker!"
                    buttonUrl="/online-poker"
                />
            </div>
            <div className="grid tablet:grid-cols-2 gap-y-5 tablet:mt-5 desktop:mx-[80px] tablet:divide-x divide-teal-blue">
                <div className="desktop:pr-[50px]">
                    <Informational
                        title={"What's Rakeback?"}
                        content={[
                            "In any poker room - live or online - the house keeps a share of each pot.  This is the rake, and is the house's way of getting paid.",
                            "In brick-and-mortar casinos, this money is gone (except for a promo or lucky jackpot).",
                            "In online poker, however, the sites give some of this money back to you, as a reward and an incentive. This rakeback can have a big impact on your bottom line.",
                            "While it isn't the only factor you should weigh when choosing a site, rakeback is important. Different sites give back different percentages, and they have different bonuses and promos that can boost your bankroll.",
                            "Let's compare everything and find the best spot for you."
                        ]}
                    />
                </div>
                <div className="desktop:pl-[50px]">
                    <Informational
                        title={"What's an Affiliate?"}
                        content={[
                            "Online poker, like many other industries, uses affiliate marketing. Affiliates (like me) refer new players to a poker site, saving the site money on advertising. The player plays on the site, and the site profits and gives some back to the affiliate.",
                            "What many people don't realize is how important a good affiliate is. The right person in your corner can help you have a smoother, more profitable experience across the board.",
                            "I want to see you succeed, and I'll help you can make the best decisions. This includes great information and advice now, and support with anything that might happen in the future. Most of my clients work with me for many years and end up referring their friends.",
                            "I've been around for a while and my reputation is important to me. Let's work together!"
                        ]}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-content-center items-center tablet:my-4">
                <Testimonial />
            </div>
            <CtaBanner
                title={"Want to play online poker?"}
                bodyText={[
                    "Click the button below to learn how."
                ]}
                buttonText="Get Started Now"
                buttonUrl="/online-poker"
            />
            <Footer />
        </div>
        
    );
}

export default Home;