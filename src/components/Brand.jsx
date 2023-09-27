import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

function Brand() {
    return (
        <NavLink to="/" className="flex md:mx-4 justify-self-center self-center col-span-3 items-center no-underline">
            <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20">
                <img className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20" src={Logo} id="logo" alt="Logo"></img>
            </div>
            <div>
                <p className="font-brand my-0 text-xl md:text-3xl tracking-wider text-dark">BigBadBabar</p>
                <p className="font-slogan -mt-2 mb-0 text-xs sm:font-xl font-extrabold text-dark">Online Poker Resources</p>
            </div>
        </NavLink>
    )
}

export default Brand;