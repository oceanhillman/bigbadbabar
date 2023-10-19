import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

function Dropdown(props) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        
        function closeDropdown(event) {
            if (event.composedPath()[0].id !== (props.name + "_dropdown"))
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

    return (
        <div className="relative mx-2 p-2 laptop:w-[160px]">
            <button
                id={props.name + "_dropdown"}
                className={`w-full flex justify-center items-center font-nav no-underline text-2xl hover:text-teal-blue ${isOpen ? "text-teal-blue" : "text-dark"}`}
                onClick={handleClick}
                >
                {props.name}
                <div>
                    {isOpen ? (
                    <AiFillCaretUp className="h-4" onClick={handleClick} />
                    ) : (
                    <AiFillCaretDown className="h-4" onClick={handleClick} />
                    )}
                </div>
            </button>
            {isOpen ? 
                <div className="grid grid-cols-1 divide-y px-3 divide-white-smoke absolute w-[200px] right-[-45px] laptop:right-[-15px] bg-teal-blue rounded-3xl shadow">
                    <div className="flex flex-col items-center py-1">
                        <Link 
                            to={props.topItem.url}
                            className="w-full h-full py-1 font-nav no-underline text-lg text-white-smoke hover:text-dark">
                            {props.topItem.name}
                        </Link>
                    </div>
                    <div className="">
                        {props.items.map((item, index) => (
                            <div className="flex flex-col items-center">
                                <Link 
                                    to={item.url}
                                    className="w-full h-full py-1 font-nav no-underline text-lg text-white-smoke hover:text-dark"
                                    key={index}>
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center py-1">
                        <Link 
                            to={props.bottomItem.url}
                            className="w-full h-full py-1 font-nav no-underline text-lg text-white-smoke hover:text-dark">
                            {props.bottomItem.name}
                        </Link>
                    </div>
                </div>
            : null}
        </div>
    )
}

export default Dropdown;