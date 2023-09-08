import React from "react";
import { useState } from "react";

function NavDropdown(props) {
    
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(true);
    }

    function handleClickOff() {
        setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOff);

    return(
        <div className="relative block lg:inline-block">
            <div className="relative">
                <button 
                    onClick={handleClick}
                    className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
                 >
                    {props.title}
                </button>
            </div>
            
            <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-xl">
                {props.listItems.map(item => {
                    return(
                        isOpen ? <a href={item.url} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">{item.title}</a> : null
                    );
                })}
            </div>
        </div>
    )
}

export default NavDropdown;