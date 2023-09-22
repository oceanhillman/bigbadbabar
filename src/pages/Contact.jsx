import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <React.Fragment>
            <Header />
                <div className="grid grid-cols-2 gap-20 mx-64 my-24">
                <div className="col-span-1">
                    <h1 className="font-title font-bold text-dark">Contact me. Bitch</h1>
                    <p className="font-body text-xl">
                        You used to call me on my cell phone
                        Late night when you need my love
                        Call me on my cell phone
                        Late night when you need my love
                        And I know when that hotline bling
                        That can only mean one thing
                        I know when that hotline bling
                        That can only mean one thing
                    </p>
                </div>
                    <ContactForm />
                </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact;