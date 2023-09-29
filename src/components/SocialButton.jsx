import { Link } from "react-router-dom";

function SocialButton(props) {
    return (
        <Link to={props.url} target="_blank" rel='noopener noreferrer' className="inline-block mx-4">
            <img src={props.icon} className={`w-${props.size} h-${props.size}`} alt={props.type} />
        </Link>
    );
}

export default SocialButton;