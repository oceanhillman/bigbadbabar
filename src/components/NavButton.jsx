
function NavButton(props) {
    return (
        <a href={props.url} className="mx-10 font-nav font-extrabold no-underline text-xl text-almost-white hover:text-cloudy">
            {props.name}
        </a>
    )
}

export default NavButton;