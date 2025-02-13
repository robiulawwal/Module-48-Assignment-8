import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Card = ({ product }) => {
    const { product_image, product_title, price, product_id, availability } = product;
    return (
        <div className="p-6 rounded-2xl drop-shadow-xl bg-white flex text-center flex-col gap-6 items-center">
            <div className="relative h-[250px] w-full border-2 border-gray-300 rounded-2xl">
                <img className="rounded-2xl h-full w-full object-cover" src={product_image} alt="" />
                <span
                className={`absolute -right-4 top-2 rotate-[35deg] px-3 py-1 rounded-full w-fit border ${availability ? "bg-[#309c08]/10 border-[#6cde43dd] text-[#3aaa11]" : "bg-red-100 border-red-400 text-red-400"
                    } text-xs font-medium`}
            >
                {availability ? "In Stock" : "Out of Stock"}
            </span>
            </div>
        
            <h3 className="text-[#09080e] text-2xl font-semibold grow">{product_title}</h3>
            <p className="text-[#09080e]/60 text-xl font-medium">Price: {price}</p>

            <Link to={`/Product/${product_id}`} ><button className="px-6 py-3 bg-white rounded-[32px] cursor-pointer border text-[#9538e2] hover:bg-[#9538e2] hover:text-white text-lg font-semibold">View Details</button></Link>
        </div>
    );
};
Card.propTypes = {
    product: PropTypes.object
}
export default Card;