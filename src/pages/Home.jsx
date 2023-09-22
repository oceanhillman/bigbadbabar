import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActionBanner from "../components/ActionBanner";
import Testimonial from "../components/Testimonial";
import TestimonialCard from "../components/TestimonialCard";
import Informational from "../components/Informational";
import customer from "../images/customer.svg";

function Home() {
    return (
        <React.Fragment>
            <Header />
            <ActionBanner 
                title={"Welcome!"}
                content={[
                    "Welcome to the site. It's 2023 and we're still doing this internet poker thing!",
                    "You've come to the right place for info and resources. I've been at this since 2006 and I know what's up.",
                    "We've got you covered with classic sites and new offerings.",
                ]}
                call="Contact me!"
                actionURL="/contact"
            />
            <div className="grid grid-cols-2 auto-cols-max mx-40 my-24 divide-x divide-dark">
                <Informational
                    title={"What's Rakeback?"}
                    content={[
                        "In any poker room - live or online - the house keeps a share of each pot.  This is the rake, and is the house's way of getting paid.",
                        "In brick-and-mortar casinos, this money is gone (except for a promo or lucky jackpot).",
                        "In online poker, however, the sites give some of this money back to you, as a reward and an incentive. This rakeback can have a big impact on your bottom line.",
                        "While it isn't the only factor you should weigh when choosing a site, rakeback is important. Different sites give back different percentages, and they have different bonuses and promos that can boost your bankroll. Let's compare everything and find the best spot for you."
                    ]}
                />
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
            <div className="grid grid-cols-3 gap-5 mx-40 my-20">
                <TestimonialCard 
                    name="Ariolis30"
                    imgURL={customer}
                    statement="BigBadBabar is hands down the most helpful affiliate out there.  
                    He is always looking in the best interest of his players and not himself first. 
                    I have a lot of poker friends and I just send them to him and I've had no complaints yet. 
                    I signed up on his Intertops and Bovada affiliate and I haven't had to worry about anything. 
                    If you need someone that's knowledgeable about the sites and not just trying to slang you a deal and make money off of you then look no further."
                    about="Digital Merchant Solutions"
                />
                <TestimonialCard 
                    name="ThePrezence"
                    imgURL={customer}
                    statement="I've known BigBadBabar for more than a decade and he is the most stand up and trustworthy guy I've ever met in Poker.
                    My business partner and I ran what was the largest cash game staking stable online for many years and we had players all over the world that 
                    we staked and coached and BigBadBabar helped us out many times with all things Poker. When dealing with him, you can be confident that you're in good hands."
                    about="C Biscuit Stables"
                />
                <TestimonialCard 
                    name="Collin Moshman"
                    imgURL={customer}
                    statement="BigBadBabar is one of the good guys in the poker community. He has a great reputation and is someone I trust to trade and do business with."
                    about={`Author of "Sit 'n Go Strategy"`}
                />
            </div>
            <ActionBanner
                title={"Let's work together!"}
                content={[
                    "Click the button below to get in contact."
                ]}
                call="Get Started Now"
                action="/contact"
            />
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </React.Fragment>
        
    );
}

export default Home;