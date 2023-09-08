import React from "react";
import logo from "../logo.png";
import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";

function Header() {

    const onlinePokerLinks = [
        {
            title: "Ignition Casino",
            url: "/"
        },
        {
            title: "America's Cardroom",
            url: "/"
        },
        {
            title: "SwC Poker",
            url: "/"
        }
    ];
    
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={logo} width="64" height="64" alt="Logo"/>
                    <span className="font-semibold text-xl tracking-tight">BigBadBabar</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                
                    <NavItem 
                        title="Home"
                        url="/"
                    />
                    <NavDropdown 
                        title="Online Poker" 
                        listItems={onlinePokerLinks}
                    />
                    <NavDropdown 
                        title="Online Poker" 
                        listItems={onlinePokerLinks}
                    />
                    <NavItem
                        title="Good Stuff"
                        url="/"
                    />
                    <NavItem
                        title="Contact"
                        url="/"
                    />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;