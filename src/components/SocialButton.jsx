import {Link} from "react-router-dom";

function SocialButton(props) {
    return (
        <a href={props.url} className="inline-block mx-4">
            <img src={props.icon} className="" alt={props.type} />
        </a>
    );
}

export default SocialButton;