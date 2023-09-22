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
        <footer className="absolute inset-x-0 pt-4 bg-dark">
        <div className="container mx-auto mb-2 flex items-center justify-content-center">
            <span className="cursor-pointer font-nav no-underline text-white" onClick={scrollToTop}>
                Back to top
            </span>
        </div>
        <div className="container mx-auto my-5 flex items-center justify-content-center">
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
        <div className="container mx-auto mb-1 flex items-center justify-content-center">
            <NavLink to="/" className="mx-3 font-nav no-underline text-white">
                Home
            </NavLink>
            <span className="text-white">•</span>
            <NavLink to="/about " className="mx-3 font-nav no-underline text-white">
                About
            </NavLink>
            <span className="text-white">•</span>
            <NavLink to="/contact" className="mx-3 font-nav no-underline text-white">
                Contact
            </NavLink>
        </div>
        <div className="container mx-auto flex items-center justify-content-center">
            <p className="text-light-shadow">© {currentYear} BigBadBabar</p>
        </div>
        </footer>
    )
}

export default Footer;