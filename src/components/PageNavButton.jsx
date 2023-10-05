import { Link } from "react-router-dom";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function PageNavButton(props) {
    if (props.direction === "left") {
        return (
            <Link to={props.url} className="no-underline">
                <button className="flex justify-center items-center w-48 py-2 pr-2 pl-1 font-nav text-almost-white bg-dark rounded drop-shadow">
                    <AiFillCaretLeft />
                    {props.text}
                </button>
            </Link>
        );
    }
    else {
        return (
            <Link to={props.url} className="no-underline">
                <button className="flex justify-center items-center w-48 py-2 pr-1 pl-2 font-nav text-almost-white bg-dark rounded drop-shadow">
                    {props.text}
                    <AiFillCaretRight />
                </button>
            </Link>
        );
    }
}

export default PageNavButton;