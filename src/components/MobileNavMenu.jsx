import { useState, useEffect } from "react";
import Brand from "./Brand";
import MobileNavButton from "./MobileNavButton";
import MobileDropdown from "./MobileDropdown";
import { AiOutlineClose } from "react-icons/ai";
import hamburgerMenuIcon from "../images/hamburger-menu.svg";

function MobileNavMenu() {

    const [isOpen, setIsOpen] = useState(false);

    function HamburgerMenu() {

        const handleClick = () => setIsOpen(!isOpen);

        return (<img src={hamburgerMenuIcon} className="justify-self-start ml-4 mr-auto " onClick={handleClick}/>);
    }

    function closeMenu() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (isOpen) {
            document.getElementsByTagName('html')[0].style.overflow = "hidden";
        }
        else {
            document.getElementsByTagName('html')[0].style.overflow = "scroll";
        }
    }, [isOpen]);
    
    return (
        <div className="tablet:hidden">
            <div className="grid grid-cols-5 align-items-center justify-center text-center py-2">
                <HamburgerMenu />
                <Brand />
            </div>
            <nav className={`z-1 fixed bottom-0 left-0 w-screen flex flex-col justify-between ${isOpen ? "h-screen " : "h-0 "} overflow-hidden transition-all delay-150 duration-300 bg-teal-blue`}>
                <div className={`m-2 p-2 self-end`} onClick={closeMenu}>
                    <AiOutlineClose className="text-almost-white text-4xl" />
                </div>
                <div className="mb-[200px]">
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
                </div>
                <div></div>
            </nav>
        </div>
    )
}

export default MobileNavMenu;