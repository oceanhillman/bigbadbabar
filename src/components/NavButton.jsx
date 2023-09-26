import { NavLink } from "react-router-dom";

function NavButton(props) {
    return (
        <NavLink to={props.url} className="mx-1 lg:mx-9 font-nav font-extrabold no-underline text-xl p-2 text-dark hover:text-almost-white">
            {props.name}
        </NavLink>
    )
}

export default NavButton;