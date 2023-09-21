import Logo from "../logo.png";

function Brand() {
    return (
        <a href="/" className="flex items-center no-underline">
            <div>
                <img className="w-20 h-20" src={Logo} id="logo" alt="Logo"></img>
            </div>
            <div>
                <p className="font-brand my-0 text-3xl tracking-wider text-dark">BigBadBabar</p>
                <p className="font-slogan -mt-2 mb-0 font-xl font-extrabold text-cloudy">Online Poker Resources</p>
            </div>
        </a>
    )
}

export default Brand;