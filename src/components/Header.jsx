import Brand from "./Brand";
import HeaderNavButton from "./HeaderNavButton";
import Dropdown from "./Dropdown";
import MobileNavMenu from "./MobileNavMenu";

function Header() {

    return (
        <header>
            <nav className="hidden tablet:flex align-items-center justify-content-center py-2 text-center">
                <HeaderNavButton 
                    name="Home"
                    path="/"
                />
                <Dropdown
                    name="Poker"
                    topItem={{name:"Play Online Poker", url:"/online-poker"}}
                    items={[
                        {name:"Ignition Casino", url:"/ignition-casino"},
                        {name:"America's Cardroom", url:"/americas-cardroom"},
                        {name:"SwC Poker", url:"/swc-poker"},
                        {name:"Poker Bros", url:"/poker-bros"},
                        {name:"Pokerrrr 2", url:"/pokerrrr-2"},
                        {name:"Kings Club Poker", url:"/kings-club-poker"},
                    ]}
                    bottomItem={{name:"International Poker", url:"/international"}}
                />
                <Brand />
                <HeaderNavButton 
                    name="Contact"
                    path="/contact"
                />
                <HeaderNavButton 
                    name="Good Stuff"
                    path="/good-stuff"
                />
            </nav>
            <MobileNavMenu />
        </header>
    )
}

export default Header;