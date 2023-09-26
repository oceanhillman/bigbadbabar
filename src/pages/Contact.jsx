import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import SocialButton from "../components/SocialButton";
import telegramIcon from "../images/telegram-icon.svg";
import xIcon from "../images/x-icon.svg";
import skypeIcon from "../images/skype-icon.svg";

function Contact() {
    return (
        <React.Fragment>
            <Header />
            <div className="min-h-screen">
                <div className="grid gap-x-20 lg:mx-16 xl:mx-64 xl:my-24 xl:grid-cols-2">
                    <div className="col-span-1">
                        <div className="hidden xl:block">
                            <h1 className="font-title font-bold text-5xl text-dark tracking-wide text-center xl:text-left">Get In Contact</h1>
                            <p className="my-5 font-body text-2xl">
                                Feel free to contact me anytime by email or by using the social links below and I'll get back to you as soon as possible.
                            </p>
                        </div>
                        <div className="hidden xl:flex flex-col justify-center">
                            <div className="flex flex-row justify-center">
                                <SocialButton
                                    type="Telegram"
                                    url="https://t.me/bigbadbabar"
                                    icon={telegramIcon}
                                />
                                <SocialButton
                                    type="X"
                                    url="https://twitter.com/realbigbadbabar"
                                    icon={xIcon}
                                />
                                <SocialButton
                                    type="Skype"
                                    url="https://join.skype.com/invite/JWGmIdOskRQS"
                                    icon={skypeIcon}
                                />
                            </div>
                            <Link to="https://forumserver.twoplustwo.com/members/44298/" className="my-3 text-center text-lg font-body text-dark">
                                Two Plus Two Poker Forums
                            </Link>
                        </div>
                    </div>
                    <ContactForm />
                </div>
                <div className="xl:hidden flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <SocialButton
                            type="Telegram"
                            url="https://t.me/bigbadbabar"
                            icon={telegramIcon}
                        />
                        <SocialButton
                            type="X"
                            url="https://twitter.com/realbigbadbabar"
                            icon={xIcon}
                        />
                        <SocialButton
                            type="Skype"
                            url="https://join.skype.com/invite/JWGmIdOskRQS"
                            icon={skypeIcon}
                        />
                    </div>
                    <Link to="https://forumserver.twoplustwo.com/members/44298/" className="my-3 text-center text-lg font-body text-dark">
                        Two Plus Two Poker Forums
                    </Link>
                    </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact;