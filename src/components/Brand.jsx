import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

function Brand() {
    return (
        <NavLink to="/" className="flex col-span-4 mobile-m:col-span-3 mobile-m:justify-self-center items-center no-underline">
            <div className="hidden mobile-s:block w-[44px] h-[44px] mobile-m:w-[60px] mobile-m:h-[60px] tablet:w-20 tablet:h-20">
                <img className="w-[44px] h-[44px] mobile-m:w-[60px] mobile-m:h-[60px] tablet:w-20 tablet:h-20" src={Logo} id="logo" alt="Logo"></img>
            </div>
            <div>
                <p className="relative z-1 font-brand my-0 text-xl tracking-wide tablet:text-3xl text-dark">BigBadBabar</p>
                <p className="relative z-0 font-nav -mt-[7px] mb-0 mobile-m:font-xl font-extrabold text-teal-blue">Online Poker Resources</p>
            </div>
        </NavLink>
    )
}

export default Brand;