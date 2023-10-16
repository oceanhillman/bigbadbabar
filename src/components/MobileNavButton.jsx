import { useState } from "react";
import { Link } from "react-router-dom";

function MobileNavButton(props) {

    const [isSelected, setIsSelected] = useState(false);

    function handleClick() {
        setIsSelected(!isSelected);
    }

    return(
        <Link 
            to={props.url} 
            className={`py-2 flex flex-row text-xl font-nav font-bold no-underline text-almost-white cursor-pointer hover:text-gray-200 ${props.type === "submenu" ? "bg-dark/50" : "bg-teal-blue"}`} 
            onClick={handleClick}>
            <p className="my-0 mx-auto">
                {props.title}
            </p>
        </Link>
    )
}

export default MobileNavButton;