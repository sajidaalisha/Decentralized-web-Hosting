import logo from "../asserts/logo.png"
const Header = ()=>{
    const lis = "p-4 hover:animate-bounce cursor-pointer";
    return(
        <div className = "flex items-center drop-shadow-lg justify-between w-full h-3/8 bg-black text-white ">
            <div className="flex text-3xl justify-center mx-2">
                <img src={logo} alt="Logo" className="h-14"/>
            </div>
            <div className="flex">
                <ul className="flex flex-1 justify-evenly mx-2">
                    <li className={lis}>
                        Docs
                    </li>
                    <li className={lis}>
                        About
                    </li>
                    <li className={lis}>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;