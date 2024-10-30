import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "../Link/Link";
import { useState } from "react";

const NavBar = () => {

    const [ open, setOpen ] = useState(false);
    const routes = [
        { path: "/", name: "Home", component: "HomePage" },
        { path: "/about", name: "About", component: "AboutPage" },
        { path: "/services", name: "Services", component: "ServicesPage" },
        { path: "/contact", name: "Contact", component: "ContactPage" },
        { path: "/profile", name: "Profile", component: "ProfilePage" }
    ];

    return (

        <nav className="bg-sky-50 text-sky-600 p-6">
            <div className=" md:hidden" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose className="text-2xl"></AiOutlineClose>
                    :<AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                }

            </div>
            <ul className={`md:flex absolute md:static bg-sky-200 p-6 shadow-lg duration-1000
                    ${open ? 'top-16':'-top-60'}
                `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;