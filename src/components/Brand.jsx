import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

function Brand() {
    return (
        <NavLink to="/" className="flex mx-4 items-center no-underline">
            <div className="w-20 h-20">
                <img className="w-20 h-20" src={Logo} id="logo" alt="Logo"></img>
            </div>
            <div>
                <p className="font-brand my-0 text-3xl tracking-wider text-dark">BigBadBabar</p>
                <p className="font-slogan -mt-2 mb-0 font-xl font-extrabold text-dark">Online Poker Resources</p>
            </div>
        </NavLink>
    )
}

export default Brand;