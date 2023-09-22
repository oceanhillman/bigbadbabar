import NavButton from "./NavButton";
import Brand from "./Brand";


function Header() {
    return (
        <header>
            <nav className="d-flex align-items-center justify-content-center text-center py-2 bg-gradient-to-b from-dark/10 to-transparent">
                <NavButton 
                    name="About"
                    url="/about"
                />
                <NavButton 
                    name="Resources"
                    url="/resources"
                />
                <Brand />
                <NavButton 
                    name="Contact"
                    url="/contact"
                />
                <NavButton 
                    name="Good Stuff"
                    url="/good-stuff"
                />
            </nav>
        </header>
    )
}

export default Header;