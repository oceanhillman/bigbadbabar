import NavButton from "./NavButton";
import Brand from "./Brand";


function Header() {
    return (
        <header>
            <nav className="d-flex align-items-center justify-content-center text-center py-2 bg-gradient-to-b from-dark/25 to-transparent">
                <NavButton 
                    name="About"
                    url="/"
                />
                <NavButton 
                    name="Resources"
                    url="/"
                />
                <Brand />
                <NavButton 
                    name="Contact"
                    url="/"
                />
                <NavButton 
                    name="Good Stuff"
                    url="/"
                />
            </nav>
        </header>
    )
}

export default Header;