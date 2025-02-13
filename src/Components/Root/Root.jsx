import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { SharedStateContext } from "../dataContexts/DataContexts";

const Root = () => {
    const [cart, setCart] = useState([]);
    const [wishlists, setWishlists] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
const [reviews,setReviews]= useState([])
    return (
        <SharedStateContext.Provider value={{ cart, setCart, wishlists, setWishlists, totalPrice, setTotalPrice,reviews,setReviews }}>
            <div className="font-sora bg-[#f6f6f6]">
                <Navbar />
                <Outlet />
                <Footer />
                <ToastContainer />
            </div>
        </SharedStateContext.Provider>
    );
};

export default Root;
