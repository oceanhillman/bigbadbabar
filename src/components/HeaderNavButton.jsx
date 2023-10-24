import { NavLink } from "react-router-dom";

function HeaderNavButton(props) {
    return (
        <NavLink reloadDocument to={props.path} className="laptop:w-[160px] mx-2 p-2 text-2xl text-dark hover:text-teal-blue whitespace-nowrap no-underline font-nav">
            {props.name}
        </NavLink>
    )
}

export default HeaderNavButton;