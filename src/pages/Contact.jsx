import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import SocialButton from "../components/SocialButton";
import telegramIcon from "../images/telegram-icon.svg";
import xIcon from "../images/x-icon.svg";
import skypeIcon from "../images/skype-icon.svg";
import ActionBanner from "../components/ActionBanner";

function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">
                <div className="flex mx-auto sm:my-2 md:my-3 lg:my-4 xl:my-5 max-w-xl">
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;