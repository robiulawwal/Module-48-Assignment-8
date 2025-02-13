import { useContext, useState } from "react";
import { SlEqualizer } from "react-icons/sl";
import { SharedStateContext } from "../dataContexts/DataContexts";
import ShowCart from "../ShowCart/ShowCart";
import { Link, useNavigate } from "react-router-dom";
import groupPng from "../../assets/Group.png"
import Modal from "../modal/Modal";

const Dashboard = () => {
    // for navigate from modal
    const navigate = useNavigate();
    const handleNavigateHome = () => {
        navigate('/');
    };
    const { cart, setCart, setWishlists, wishlists, totalPrice, setTotalPrice } = useContext(SharedStateContext);
    const [selectedTab, setSelectedTab] = useState("cart");
    const [showCart, setShowCart] = useState(cart);
    const [showWishList, setShowWishLists] = useState(wishlists);
    const [newPrice, setNewPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // handle modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        handleNavigateHome();
    }
    // Handle tab selection
    const handleCartClick = (tab) => {
        setSelectedTab(tab);
    };

    // Handle sorting by price
    const handleSortButton = () => {
        if (selectedTab === "cart") {
            const sortedCart = [...showCart].sort((a, b) => b.price - a.price);
            setShowCart(sortedCart);
        } else {
            const sortedWishlist = [...showWishList].sort((a, b) => b.price - a.price);
            setShowWishLists(sortedWishlist)
        }
    };
    const handleDeleteItem = (id, price) => {
        if (selectedTab === "cart") {
            const updatedCart = showCart.filter(p => p.product_id !== id);
            setShowCart(updatedCart);
            setCart(updatedCart);
            setTotalPrice(totalPrice - price);


        } else {
            const updatedWishlist = showWishList.filter(p => p.product_id !== id);
            setShowWishLists(updatedWishlist);
            setWishlists(updatedWishlist);
        }

    }
    const handlePurchase = () => {
        if (selectedTab === "cart") {
            setNewPrice(totalPrice);
            setTotalPrice(0);
            setShowCart([]);
            setCart([]);
            openModal()
        }
        else {
            setWishlists([]);
            setShowWishLists([]);
        }
    }
    return (
        <div>
            <div className="bg-[#9538e2] py-10">
                <div className="w-11/12 lg:w-full max-w-[800px] mx-auto space-y-6">
                    <h3 className="text-center text-white text-[32px] font-bold">Dashboard</h3>
                    <div className="text-center text-white text-base font-normal leading-relaxed">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
                    <button
                        onClick={() => handleCartClick("cart")}
                        className={`px-16 py-3 rounded-[32px] text-lg font-extrabold border 
                    ${selectedTab === "cart" ?
                                'bg-white text-[#8d2ade] border-white  hover:bg-white hover:text-[#8d2ade]' :
                                'bg-[#8d2ade] text-white hover:bg-white hover:text-[#8d2ade] hover:bg-[#8d2ade]hover:text-white'}`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => handleCartClick("wishlist")}
                        className={`px-16 py-3 rounded-[32px] text-lg font-bold border-2 
                    ${selectedTab === "wishlist" ?
                                'bg-white text-[#9538e2] font-bold border-[#9538e2]' :
                                'hover:bg-white hover:text-[#9538e2] border-white text-white'}`}
                    >
                        Wishlist
                    </button>
                </div>

            </div>
            <div>
                {/* DaisyUI Modal */}
                <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
                    <div className="modal-box flex flex-col items-center rounded-2xl gap-5">
                        <img src={groupPng} alt="success" />
                        <h3 className="text-2xl font-bold">Payment Successful</h3>
                        <p className="text-[#09080f]/60 font-medium">Thanks for purchasing.</p>
                        <p className="text-[#09080f]/60 font-medium">Total: {newPrice}</p>
                        <div className="modal-action w-full">
                            <button onClick={closeModal} className="btn py-6 text-white text-xl bg-[#9538E2] w-full rounded-4xl">Close!</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1300px] mx-auto">
                <div className="py-5 md:py-10 items-center flex gap-5">
                    <div className="flex justify-between flex-wrap w-full">
                        <h1 className="text-2xl font-bold text-neutral-950">{selectedTab}</h1>
                        <div className="flex items-center flex-wrap gap-6">
                            {
                                selectedTab === "cart" ? <p className="text-2xl font-bold text-neutral-950">Total cost: {totalPrice}</p> : ''
                            }
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 md:flex-row flex-col items-center gap-4">
                        <button disabled={cart.length === 0 && selectedTab === "cart" || showWishList.length === 0 && selectedTab !== "cart"} onClick={handleSortButton} className="px-6 py-7 disabled:text-white disabled:border-white btn rounded-[32px] border border-[#9538e2] flex items-center gap-3 transition transition-400 ease-in-out hover:bg-[#9538e2] text-lg font-semibold hover:text-white text-[#9538e2]">Sort by Price
                            <SlEqualizer className="text-2xl"></SlEqualizer>
                            {/* SVG Icon */}
                        </button>
                        <button disabled={showCart.length === 0 && selectedTab === "cart" || showWishList.length === 0 && selectedTab !== "cart"} onClick={handlePurchase} className="btn px-8 py-7 border rounded-[32px] hover:bg-white bg-[#9538e2] hover:text-[#9538e2] transition transition-400 ease-in-out text-white text-lg font-medium">
                            {selectedTab === "cart" ? "Purchase" : "clear Wishlist"}
                        </button>
                    </div>
                </div>

                <div className="space-y-7 mt-4 w-11/12 mx-auto">
                    {
                        selectedTab === "cart" ?
                            showCart.length > 0 ?
                                showCart.map((item, idx) => <ShowCart handleDeleteItem={handleDeleteItem} item={item} key={idx}></ShowCart>) :
                                <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-[#09080f]/10">
                                    <h3 className="text-3xl font-bold text-[#8b34d3] mb-4">No Items In Cart</h3>
                                    <p className="text-lg text-stone-600 text-center">Currently no Items added in the Cart go back to home and select some items to purchase pressing the button you will be redirected to the home section .</p>

                                    <Link to='/'><button className="mt-6 py-3 px-6 bg-[#8b34d3] text-white text-lg font-bold rounded-4xl hover:bg-[#7a2db9] transition-colors"> Go To Home </button></Link>
                                </div>
                            :
                            showWishList.length > 0 ?
                                showWishList.map((item, idx) => <ShowCart handleDeleteItem={handleDeleteItem} item={item} key={idx}></ShowCart>) :
                                <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-[#09080f]/10">
                                    <h3 className="text-3xl font-bold text-[#8b34d3] mb-4">Empty Wishlists</h3>
                                    <span className="border-l-4 border-[#9c3fe9] pl-2">
                                        <p className="text-xl font-semibold bg-gradient-to-r from-[#832bca] to-fuchsia-500 bg-clip-text text-transparent text-left">
                                            Empty pockets? Dont worry, add some items in wish lists. Dreams gonna come true <br />  Till then work hard.
                                        </p>
                                    </span>

                                    <Link to='/'><button className="mt-6 py-3 px-6 bg-[#8b34d3] text-white text-lg font-bold rounded-4xl hover:bg-[#7a2db9] transition-colors"> Go To Home </button></Link>
                                </div>
                    }
                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Dashboard;