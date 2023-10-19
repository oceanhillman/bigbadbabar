import SocialButton from "./SocialButton";
import xIcon from "../images/x-icon.svg";
import skypeIcon from "../images/skype-icon.svg";
import telegramIcon from "../images/telegram-icon.svg";
import { NavLink } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    function scrollToTop() {
        window.scrollTo({
          top: 0, 
          behavior: "smooth"
        });
      };

    return (
        <footer className="mt-5 pt-4 bg-dark">
            <div className="hidden sm:flex container mb-2 items-center justify-content-center">
                <span className="cursor-pointer font-sans no-underline text-white" onClick={scrollToTop}>
                    Back to top
                </span>
            </div>
            <div className="container mx-auto my-3 lg:my-5 flex items-center justify-content-center">
                <SocialButton
                    type="Telegram"
                    url="https://t.me/bigbadbabar"
                    icon={telegramIcon}
                    size={8}
                />
                <SocialButton
                    type="X"
                    url="https://twitter.com/realbigbadbabar"
                    icon={xIcon}
                    size={8}
                />
                <SocialButton
                    type="Skype"
                    url="https://join.skype.com/invite/JWGmIdOskRQS"
                    icon={skypeIcon}
                    size={8}
                />
            </div>
            <div className="container mx-auto mb-1 flex items-center justify-content-center">
                <NavLink to="/" className="mx-3 font-sans no-underline text-white">
                    Home
                </NavLink>
                <span className="text-white">•</span>
                <NavLink to="/online-poker " className="mx-3 whitespace-nowrap font-sans no-underline text-white">
                    Online Poker
                </NavLink>
                <span className="text-white">•</span>
                <NavLink to="/contact" className="mx-3 font-sans no-underline text-white">
                    Contact
                </NavLink>
            </div>
            <div className="container mx-auto flex items-center justify-content-center">
                <p className="text-light-shadow font-sans">© {currentYear} BigBadBabar</p>
            </div>
        </footer>
    )
}

export default Footer;