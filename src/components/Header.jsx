import { useState } from "react";
import Brand from "./Brand";
import HeaderNavButton from "./HeaderNavButton";
import Dropdown from "./Dropdown";
import MobileNavButton from "./MobileNavButton";
import MobileDropdown from "./MobileDropdown";
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
                <HeaderNavButton 
                    name="Home"
                    url="/"
                />
                <Dropdown
                    name="Poker"
                    topItem={{name:"Play Online Poker", url:"/online-poker"}}
                    items={[
                        {name:"Ignition Casino", url:"/ignition-casino"},
                        {name:"America's Cardroom", url:"/americas-cardroom"},
                        {name:"SwC Poker", url:"/swc-poker"},
                        {name:"Poker Bros", url:"/poker-bros"},
                        {name:"Pokerrrr 2", url:"/pokerrrr-2"},
                        {name:"Kings Club Poker", url:"/kings-club-poker"},
                    ]}
                    bottomItem={{name:"International Poker", url:"/international"}}
                />
                <Brand />
                <HeaderNavButton 
                    name="Contact"
                    url="/contact"
                />
                <HeaderNavButton 
                    name="Good Stuff"
                    url="/good-stuff"
                />
            </nav>
            {/* Mobile Header */}
            <nav className="grid grid-cols-5 sm:hidden align-items-center justify-center text-center py-2 bg-gradient-to-b from-dark/10 to-transparent">
                <MobileMenu />
                <Brand />
            </nav>
            <nav className={`sm:hidden grid grid-cols-1 divide-y ${isOpen ? "block" : "hidden"} bg-keppel`}>
                    <MobileNavButton 
                        title="Home"
                        url="/"
                    />
                   <MobileDropdown 
                        title="Poker"
                        items={[
                            {title:"Play Online Poker", url:"/online-poker"},
                            {title:"Ignition Casino", url:"/ignition-casino"},
                            {title:"America's Cardroom", url:"/americas-cardroom"},
                            {title:"SwC Poker", url:"/swc-poker"},
                            {title:"Poker Bros", url:"/poker-bros"},
                            {title:"Pokerrrr 2", url:"/pokerrrr-2"},
                            {title:"Kings Club Poker", url:"/kings-club-poker"},
                            {title:"International Poker", url:"/international"},
                        ]}
                   />
                    <MobileNavButton 
                        title="Contact"
                        url="/contact"
                    />
                    <MobileNavButton 
                        title="Good Stuff"
                        url="/good-stuff"
                    />
            </nav>
        </header>
    )
}

export default Header;