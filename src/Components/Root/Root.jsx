import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { SharedStateContext } from "../dataContexts/DataContexts";

const Root = () => {
    const [location, setLocation] = useState("Home");
    const getLocation = useLocation().pathname.split("/")[1];
    useEffect(() => {
        if (getLocation) {
            setLocation(getLocation);

        }
        else {
            setLocation("Home")
        }
    }, [getLocation]);
    document.title = `${location} | Gadget Garden`;

    const [cart, setCart] = useState([]);
    const [wishlists, setWishlists] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [reviews, setReviews] = useState([])
    return (
        <SharedStateContext.Provider value={{ cart, setCart, wishlists, setWishlists, totalPrice, setTotalPrice, reviews, setReviews }}>
            <div className="font-sora bg-[#f6f6f6]">
                <Navbar />
                <Outlet />
                <Footer />
                <ToastContainer style={{ top: '40%' }} />
            </div>
        </SharedStateContext.Provider>
    );
};

export default Root;
