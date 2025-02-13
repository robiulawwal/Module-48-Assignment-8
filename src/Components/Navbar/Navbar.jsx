import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { SharedStateContext } from "../dataContexts/DataContexts";


const Navbar = () => {
    const { cart, wishlists } = useContext(SharedStateContext);
    const location = useLocation().pathname;

    return (
        <div className={location ==="/"?"":"backdrop-blur-xs bg-white/80 sticky top-0 z-10"}>
            <nav className={location === '/' ? "bg-[#9538E2] md:text-white mx-8 mt-8 rounded-t-2xl pb-16 text-center py-10" : "py-4 md:py-8"}>
                <div className="flex justify-between items-center w-11/12 max-w-[1280px] mx-auto gap-4 lg:gap-0">
                    <div className="md:hidden dropdown">
                        <div tabIndex={0} role="button" className={location ==="/"?"btn btn-ghost lg:hidden text-white":"btn btn-ghost lg:hidden"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-5 p-5 w-fit shadow space-y-2">
                            <NavLink className={location === '/' ? "text-[#9538E2] hover:bg-fuchsia-600 hover:rounded-2xl px-3 py-1" : "hover:bg-fuchsia-600 hover:rounded-2xl px-3 py-1"} to='/'>Home</NavLink>
                            <NavLink className={location === '/Statics' ? "text-[#9538E2] hover:bg-fuchsia-600 hover:rounded-2xl px-3 py-1" : "hover:bg-fuchsia-600 hover:rounded-2xl px-3 py-1"} to='/Statics'>Statistics</NavLink>
                            <NavLink className={location === '/Dashboard' ? "text-[#9538E2] hover:bg-fuchsia-600 hover:rounded-2xl px-3 py-1" : "hover:bg-fuchsia-600 hover:rounded-2xl px-3 py-1"} to='/Dashboard'>Dashboard</NavLink>
                            <NavLink className={location === '/Reviews' ? "text-[#9538E2] hover:bg-fuchsia-600 hover:rounded-2xl px-3 py-1" : "hover:bg-fuchsia-600 hover:rounded-2xl px-3 py-1"} to='/Reviews'>Reviews</NavLink>
                        </ul>
                    </div>
                    <h3 className={location ==='/'?"text-2xl font-bold text-white":"text-2xl font-bold"}>Gadget Heaven</h3>
                    <div className="text-lg font-bold hidden md:flex items-center gap-10">
                        <NavLink className={location === '/' ? "border-b-2" : ""} to='/'>Home</NavLink>
                        <NavLink className={location === '/Statics' ? "text-[#9538E2]" : ""} to='/Statics'>Statistics</NavLink>
                        <NavLink className={location === '/Dashboard' ? "text-[#9538E2]" : ""} to='/Dashboard'>Dashboard</NavLink>
                        <NavLink className={location === '/Reviews' ? "text-[#9538E2]" : ""} to='/Reviews'>Reviews</NavLink>
                    </div>

                    <div className="flex gap-3">
                        <div className="indicator">
                            <span className="indicator-item badge bg-green-500 text-white">{cart.length}</span>
                            <button className="btn rounded-full py-5 px-3">
                                <FiShoppingCart className="text-xl"></FiShoppingCart>

                            </button>
                        </div>
                        <div className="indicator">
                            <span className="indicator-item badge bg-green-500 text-white">{wishlists.length}</span>
                            <button className="btn rounded-full py-5 px-3">
                                <FaRegHeart className="text-xl"></FaRegHeart>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Navbar;