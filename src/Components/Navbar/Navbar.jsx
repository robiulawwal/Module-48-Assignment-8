import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { SharedStateContext } from "../dataContexts/DataContexts";

const Navbar = () => {
    const{cart,wishlists}=useContext(SharedStateContext);
    const location = useLocation().pathname;

    return (
        <nav className={location === '/' ? "bg-[#9538E2] text-white mx-8 mt-8 rounded-t-2xl pb-16 text-center py-10" : "py-4 md:py-8 sticky top-0 z-10 backdrop-blur-xs bg-white/80"}>
            <div className="flex justify-between items-center flex-col lg:flex-row max-w-[1280px] mx-auto gap-4 lg:gap-0">
                <h3 className="text-2xl font-bold">Gadget Heaven</h3>
                <div className="text-lg font-bold flex items-center gap-10">
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

    );
};

export default Navbar;