import PropTypes from "prop-types";
import { useContext } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { SharedStateContext } from "../dataContexts/DataContexts";
import { toast } from "react-toastify";

const ShowDetails = ({ product }) => {
    const { cart, setCart, wishlists, setWishlists, totalPrice, setTotalPrice, reviews, setReviews } = useContext(SharedStateContext);

    const { product_title, product_image, price, description, Specification, availability, rating } = product;

    const handleCartItem = (e) => {
        e.target.disabled = true;
        const isItemExists = cart.find(p => p.product_id === product.product_id);
        if (product.availability) {
            if (!isItemExists) {
                setCart([...cart, product]);
                toast.success(<span className="flex items-center gap-2">Item added to cart <FiShoppingCart className="text-2xl text-green-600"></FiShoppingCart></span>);

                setTotalPrice(totalPrice + product.price)
            }
            else {
                toast.warning(<span className="flex items-center gap-2">Already exists in cart <FiShoppingCart className="text-2xl"></FiShoppingCart></span>);

            }
        }
        else {
            toast.error("Currently stocked out");
        }
    }
    const handleWishListsItem = (e) => {
        e.target.disabled = true;
        const isItemExists = wishlists.find(p => p.product_id === product.product_id);
        if (product.availability) {
            if (!isItemExists) {
                setWishlists([...wishlists, product]);
                toast.success(<span className="flex items-center gap-2">Added to wishlists <FaRegHeart className="text-2xl text-green-600"></FaRegHeart></span>);
            }
            else {
                toast.warning(<span className="flex items-center gap-2">Exist in wishlists <FaRegHeart className="text-2xl"></FaRegHeart></span>)
            }
        }
        else {
            toast.error("Currently stocked out")
        }

    }
    const handleReviews = () => {
        const isRated = reviews.find(p => p.product_id === product.product_id);
        if (!isRated) {
            setReviews([...reviews, product]);
            toast("Ratings added")
        }
        else {
            toast.warning("Already given ratings")
        }
    }
    return (
        <div className="p-8 bg-white rounded-3xl max-w-[1280px] w-11/12 relative bottom-28 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <img
                    src={product_image}
                    alt={product_title}
                    className="w-full max-w-[424px] bg-[#ebebeb] rounded-2xl"
                />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-semibold text-[#09080e]">{product_title}</h2>
                        <p className="text-xl font-semibold text-[#09080e]/80">Price: {price} $</p>
                    </div>
                    <span
                        className={`px-3.5 py-1 rounded-full w-fit border ${availability ? "bg-[#309c08]/10 border-[#309c08] text-[#309c08]" : "bg-red-100 border-red-500 text-red-500"
                            } text-sm font-medium`}
                    >
                        {availability ? "In Stock" : "Out of Stock"}
                    </span>
                    <p className="text-lg text-[#09080e]/60">{description}</p>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-bold text-[#09080e]">Specification:</h3>
                        <ul className="text-lg text-[#09080e]/60">
                            {Specification.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                    </div>
                    <h4 className="text-lg font-bold flex items-center gap-1">Rating <FaStar className="text-yellow-400 text-xl"></FaStar> </h4>
                    <div className="flex items-center gap-5">
                        <div onClick={handleReviews} className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="1 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="2 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="3 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="4 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#f8bf04]" aria-label="5 star" />

                        </div>
                        <p className="py-1.5 px-3 bg-gray-200 rounded-3xl">{rating}</p>
                    </div>
                    <p className="text-sm bg-yellow-100 rounded-xl w-fit">click on stars to add ratings</p>
                    <div className="flex gap-4 items-center">
                        <button onClick={handleCartItem} className="bg-[#9136da] rounded-full text-white text-lg font-bold flex items-center gap-2 hover:bg-white border-1 hover:border-[#9136da] btn py-[26px] px-7 hover:text-[#9136da]">
                            Add To Cart
                            <FiShoppingCart className="text-2xl"></FiShoppingCart>
                        </button>

                        <button onClick={handleWishListsItem} className="py-6 btn rounded-full border border-[#09080f]/10 hover:bg-[#9538e2] hover:text-white">
                            <FaRegHeart className="text-2xl"></FaRegHeart>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};
ShowDetails.propTypes = {
    product: PropTypes.object
}
export default ShowDetails;