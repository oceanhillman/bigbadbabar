import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import YoutubeEmbed from "../components/YouTubeEmbed";
import SocialButton from "../components/SocialButton";
import bloggerIcon from "../images/blogger-icon.svg";

function GoodStuff() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">
                <div className="flex flex-col items-center mx-auto max-w-xl">
                    <h1 className="my-4 text-center font-serif text-dark">
                        Behold - Cool things!
                    </h1>
                    <div className="flex flex-row justify-start items-center mb-2 mx-2">
                        <SocialButton
                            icon={bloggerIcon}
                            url="http://jessetakesashot.blogspot.com/"
                            type="Blogger"
                            size={16}
                        />
                        <Link to={"http://jessetakesashot.blogspot.com"} target="_blank" rel='noopener noreferrer' className="-ml-6 text-dark font-sans text-xl block">
                            My friend's blog - the life and times of a SoCal pro.
                        </Link>
                    </div>
                    <p className="font-sans mt-4 mb-1 text-center text-xl">
                        Blergh! - my favorite seal video - you won't be disappointed.
                    </p>
                    <div className="w-full h-[250px] sm:h-[300px] lg:h-[320px] rounded-3xl overflow-hidden">
                        <YoutubeEmbed embedId="3L7VJl76i9U" />
                    </div>
                    <p className="font-sans mt-4 mb-1 text-center text-xl">
                        Second favorite! - cute baby seal gets rescued.
                    </p>
                    <div className="w-full h-[250px] sm:h-[300px] lg:h-[320px] rounded-3xl overflow-hidden">
                        <YoutubeEmbed embedId="dnqV1qAwpf0" />
                    </div>
                    <p className="font-sans mt-4 mb-1 text-center text-xl">
                        And a third! - okay look I just really like seals.
                    </p>
                    <div className="w-full h-[250px] sm:h-[300px] lg:h-[320px] rounded-3xl overflow-hidden">
                        <YoutubeEmbed embedId="C9_UZ-8Uc2s" />
                    </div>
                    <p className="font-sans mt-4 mb-1 text-center text-xl">
                        Stompy Siamese - cats are cool too.
                    </p>
                    <div className="w-full h-[250px] sm:h-[300px] lg:h-[320px] rounded-3xl overflow-hidden">
                        <YoutubeEmbed embedId="LmKx-Ut5MpU" />
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GoodStuff;