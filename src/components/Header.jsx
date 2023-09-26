import NavButton from "./NavButton";
import Brand from "./Brand";
import MobileMenu from "./MobileMenu";


function Header() {
    return (
        <header>
            {/* Large Header */}
            <nav className="hidden sm:flex align-items-center justify-content-center text-center py-2 bg-gradient-to-b from-dark/10 to-transparent">
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
            {/* Mobile Header */}
            <nav className="grid grid-cols-5 sm:hidden align-items-center justify-center text-center py-2 bg-gradient-to-b from-dark/10 to-transparent">
                <MobileMenu />
                <Brand />
            </nav>
        </header>
    )
}

export default Header;