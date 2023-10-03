import { useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import Brand from "./Brand";
import MobileNavButton from "./MobileNavButton";
import hamburgerMenu from "../images/hamburger-menu.svg";
import Dropdown from "./Dropdown";


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
                    name="Home"
                    url="/"
                />
                <Dropdown
                    name="Poker"
                    topItem={{name:"About Online Poker", url:"/online-poker"}}
                    items={[
                        {name:"Ignition Casino", url:"/ignition-casino"},
                        {name:"America's Cardroom", url:"/americas-cardroom"},
                        {name:"SwC Poker", url:"/swc-poker"},
                        {name:"Poker Bros", url:"/poker-bros"},
                        {name:"Pokerrrr 2", url:"/pokerrrr-2"},
                        {name:"Kings Club Poker", url:"/americas-cardroom"},
                    ]}
                    bottomItem={{name:"International Poker", url:"/international"}}
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
            <div className={`sm:hidden flex flex-col border-t border-dark ${isOpen ? "block" : "hidden"} bg-gradient-to-br from-dark/20 via-dark/30 !to-dark/20`}>
                    <MobileNavButton 
                        title="Home"
                        url="/"
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
        </header>
    )
}

export default Header;