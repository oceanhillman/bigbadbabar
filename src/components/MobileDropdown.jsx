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
                className={`py-2 w-full flex items-center flex-row justify-center text-xl font-nav font-bold no-underline cursor-pointer text-white-smoke`} 
                onClick={handleClick}>
                <p className="my-0 ml-3">
                    {props.title}
                </p>
                <div className="flex justify-center items-center ">
                {isOpen ? (
                    <AiFillCaretUp className="h-4 text-white-smoke" onClick={handleClick} />
                ) : (
                    <AiFillCaretDown className="h-4 text-white-smoke" onClick={handleClick} />
                )}
                </div>
            </div>
            <div className={`grid grid-cols-1 w-full bg-dark font-thin ${isOpen ? "h-[350px]" : "h-0"} overflow-hidden transition-all delay-100 duration-300`}>
                {props.items.map(item => (
                    <MobileNavButton 
                    title={item.title}
                    url={item.url}
                    type="submenu"
                    />
                ))}
            </div>
        </div>
    )
}

export default MobileDropdown;