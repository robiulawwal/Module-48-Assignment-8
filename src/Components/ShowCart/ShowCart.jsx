import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const ShowCart = ({ item,handleDeleteItem }) => {
    
    const { product_image, product_title, price, description,product_id } = item;
    return (
            <div className="flex bg-white rounded-2xl p-3 md:p-4 items-center justify-between drop-shadow-lg">
                <div className="flex items-center lg:gap-5">
                    <div className="md:max-w-3xs max-w-35">
                        <img className="w-full" src={product_image} alt="" />
                    </div>
                    <div className="space-y-2 md:space-y-6 w-full">
                        <h3 className="text-2xl font-semibold">{product_title}</h3>
                        <p className="text-lg font-normal leading-7 text-[#09080e]/60"> {description}</p>
                        <h5 className="text-xl font-semibold">Price: {price}$</h5>
                    </div>
                </div>
                <MdDeleteForever onClick={()=>handleDeleteItem(product_id,price)} className="cursor-pointer hover:text-red-700 text-6xl text-red-600"></MdDeleteForever>
            </div>
    );
};
ShowCart.propTypes = {
    item: PropTypes.object,
    handleDeleteItem: PropTypes.func
}
export default ShowCart;