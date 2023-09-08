import React from "react";

function NavItem(props) {
    return (
        <a href={props.url} className="mt-1 block lg:inline-block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
            {props.title}
        </a>
    );
}

export default NavItem;