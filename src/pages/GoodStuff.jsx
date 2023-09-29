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
                <div className="flex flex-col items-center mx-auto sm:my-2 md:my-3 lg:my-4 xl:my-5 max-w-xl">
                    <h1 className="text-center font-title text-dark font-bold">
                        Behold - Cool things!
                    </h1>
                    <div className="flex flex-row items-center mt-5 mb-2">
                        <SocialButton
                            icon={bloggerIcon}
                            url="http://jessetakesashot.blogspot.com/"
                            type="Blogger"
                            size={16}
                        />
                        <Link to={"http://jessetakesashot.blogspot.com"} target="_blank" rel='noopener noreferrer' className="-ml-5 text-dark font-body block">
                            My friend's blog - the life and times of a SoCal pro.
                        </Link>
                    </div>
                    <h3 className="font-body mt-5 mb-3 text-center">
                        Blergh! - my favorite seal video - you won't be disappointed.
                    </h3>
                    <YoutubeEmbed embedId="3L7VJl76i9U" />
                    <h3 className="font-body mt-5 mb-3 text-center">
                        Second favorite! - cute baby seal gets rescued.
                    </h3>
                    <YoutubeEmbed embedId="dnqV1qAwpf0" />
                    <h3 className="font-body mt-5 mb-3 text-center">
                        And a third! - okay look I just really like seals.
                    </h3>
                    <YoutubeEmbed embedId="C9_UZ-8Uc2s" />
                    <h3 className="font-body mt-5 mb-3 text-center">
                        Stompy Siamese - cats are cool too.
                    </h3>
                    <YoutubeEmbed embedId="LmKx-Ut5MpU" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GoodStuff;