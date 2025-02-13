import { useLoaderData, useParams } from "react-router-dom";
import ShowDetails from "../ShowDetails/ShowDetails";


const ProductDetails = () => {
    const { product_id } = useParams();
    const allProducts = useLoaderData();
    const product = allProducts.find(p => p.product_id === product_id);

    return (
        <div>
            <div className="bg-[#9538e2] pb-30">
                <div className="w-11/12 lg:w-full max-w-[800px] mx-auto  space-y-6 py-8">
                    <h3 className="text-center text-white text-[32px] font-bold">Product Details</h3>
                    <div className="text-center text-white text-base font-normal leading-relaxed">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</div>
                </div>
            </div>
            <div>
                {
                    <ShowDetails product={product}></ShowDetails>
                }
            </div>
        </div>
    );
};

export default ProductDetails;