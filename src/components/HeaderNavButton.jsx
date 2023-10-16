import { NavLink } from "react-router-dom";

function HeaderNavButton(props) {
    return (
        <NavLink to={props.path} className="tablet:mx-1 desktop:mx-8 p-2 text-2xl text-dark no-underline font-nav">
            {props.name}
        </NavLink>
    )
}

export default HeaderNavButton;