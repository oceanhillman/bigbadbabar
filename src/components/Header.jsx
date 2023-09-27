import { useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import Brand from "./Brand";
import MobileNavButton from "./MobileNavButton";
import hamburgerMenu from "../images/hamburger-menu.svg";


function Header() {

    const [isOpen, setIsOpen] = useState(false);

    function MobileMenu() {

        function handleClick() {
            setIsOpen(!isOpen);
        }
    
        return(
             <img src={hamburgerMenu} className="ml-4 mr-auto justify-self-start" onClick={handleClick}/>
        )
    }

    return (
        <header>
            {/* Large Header */}
            <nav className="hidden sm:flex align-items-center justify-content-center text-center py-2 bg-gradient-to-b from-dark/10 to-transparent">
                <NavButton 
                    name="About"
                    url="/about"
                />
                <NavButton 
                    name="Resources"
                    url="/resources"
                />
                <Brand />
                <NavButton 
                    name="Contact"
                    url="/contact"
                />
                <NavButton 
                    name="Good Stuff"
                    url="/good-stuff"
                />
            </nav>
            {/* Mobile Header */}
            <nav className="grid grid-cols-5 sm:hidden align-items-center justify-center text-center py-2 bg-gradient-to-b from-dark/10 to-transparent">
                <MobileMenu />
                <Brand />
            </nav>
            <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
                <div className="flex flex-col">
                    <MobileNavButton 
                        title="About"
                        url="/about"
                    />
                   <MobileNavButton 
                        title="Resources"
                        url="/resources"
                    />
                    <MobileNavButton 
                        title="Contact"
                        url="/contact"
                    />
                    <MobileNavButton 
                        title="Good Stuff"
                        url="/good-stuff"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;