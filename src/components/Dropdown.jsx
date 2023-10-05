import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

function Dropdown(props) {

    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef();

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
        <div className="relative flex flex-col items-center justify-between sm:mx-1 lg:mx-8">
            <button
                id={props.name + "_dropdown"}
                className="w-full flex items-center font-nav font-extrabold no-underline text-xl p-2 text-dark"
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
                <div className="grid grid-cols-1 divide-y px-3 divide-dark/80 absolute sm:mx-1 w-[200px] top-11 lg:mx-8 bg-myrtle drop-shadow">
                    <div className="flex flex-col items-center py-1">
                        <Link 
                            to={props.topItem.url}
                            className="w-full h-full py-1 font-nav font-extrabold no-underline text-lg text-almost-white hover:text-dark">
                            {props.topItem.name}
                        </Link>
                    </div>
                    <div className="">
                        {props.items.map((item, index) => (
                            <div className="flex flex-col items-center">
                                <Link 
                                    to={item.url}
                                    className="w-full h-full py-1 font-nav font-extrabold no-underline text-lg text-almost-white hover:text-dark"
                                    key={index}>
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center py-1">
                        <Link 
                            to={props.bottomItem.url}
                            className="w-full h-full py-1 font-nav font-extrabold no-underline text-lg text-almost-white hover:text-dark">
                            {props.bottomItem.name}
                        </Link>
                    </div>
                </div>
            : null}
        </div>
    )
}

export default Dropdown;