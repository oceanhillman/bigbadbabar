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
                <div className="grid grid-cols-2 gap-20 mx-64 my-24">
                    <div className="col-span-1">
                        <h1 className="font-title font-bold !text-5xl text-dark tracking-wide">Get In Contact</h1>
                        <p className="my-5 font-body text-2xl">
                            Feel free to contact me anytime by email or by using the social links below and I'll get back to you as soon as possible.
                        </p>
                        <div className="flex flex-col justify-center">
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
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact;