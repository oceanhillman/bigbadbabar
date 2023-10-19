import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">
                <div className="flex flex-col mx-auto sm:my-2 md:my-3 lg:my-4 xl:my-5 max-w-xl">
                    <h1 className="my-4 text-center font-serif text-dark">
                        Contact Me
                    </h1>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;