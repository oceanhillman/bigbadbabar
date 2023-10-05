import { useState, useEffect } from "react";
import MobileNavButton from "./MobileNavButton";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

function MobileDropdown(props) {
    
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        
        function closeDropdown(event) {
            if (event.composedPath()[0].id !== (props.title + "_dropdown"))
            {
                setIsOpen(false);
            }
        };

        document.body.addEventListener("click", closeDropdown);

        return () => document.body.removeEventListener("click", closeDropdown);
    });

    function handleClick(event) {
        event.stopPropagation();
        setIsOpen(!isOpen);
    }

    return(
        <div className="relative flex flex-col items-center">
            <div 
                className={`py-2 w-full flex items-center flex-row justify-center text-xl font-nav font-bold no-underline cursor-pointer text-almost-white hover:text-gray-200 bg-myrtle`} 
                onClick={handleClick}>
                <p className="my-0 ml-3">
                    {props.title}
                </p>
                <div className="flex justify-center items-center ">
                {isOpen ? (
                    <AiFillCaretUp className="h-4" onClick={handleClick} />
                ) : (
                    <AiFillCaretDown className="h-4" onClick={handleClick} />
                )}
                </div>
            </div>
            {isOpen ? 
                <div className="grid grid-cols-1 w-full border-top divide-y">
                    {props.items.map(item => (
                        <MobileNavButton 
                        title={item.title}
                        url={item.url}
                        type="submenu"
                        />
                    ))}
                </div>
            : null}
        </div>
    )
}

export default MobileDropdown;