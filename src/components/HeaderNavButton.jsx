import { NavLink } from "react-router-dom";

function HeaderNavButton(props) {
    return (
        <NavLink to={props.url} className="sm:mx-1 lg:mx-8 font-nav font-extrabold no-underline text-xl p-2 text-dark hover:text-almost-white">
            {props.name}
        </NavLink>
    )
}

export default HeaderNavButton;