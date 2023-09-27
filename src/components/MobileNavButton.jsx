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
            className={`py-2 flex flex-row text-xl font-nav font-bold bg-dark/10 no-underline border-1 border-dark ${isSelected ? "text-almost-white" : "text-dark"}`} 
            onClick={handleClick}>
            <p className="my-0 mx-auto">
                {props.title}
            </p>
        </Link>
    )
}

export default MobileNavButton;