import { Link } from "react-router-dom";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function PageNavButton(props) {
    if (props.direction === "left") {
        return (
            <Link to={props.url} className="no-underline">
                <button className="flex justify-center items-center w-48 py-[10px] pr-2 pl-1 font-nav font-semibold text-almost-white bg-dark rounded-3xl hover:bg-dark/80">
                    <AiFillCaretLeft />
                    {props.text}
                </button>
            </Link>
        );
    }
    else {
        return (
            <Link to={props.url} className="no-underline">
                <button className="flex justify-center items-center w-48 py-[10px] pr-1 pl-2 font-nav font-semibold text-almost-white bg-dark rounded-3xl hover:bg-dark/80">
                    {props.text}
                    <AiFillCaretRight />
                </button>
            </Link>
        );
    }
}

export default PageNavButton;