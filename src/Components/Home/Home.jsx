import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Header from "../Header/Header";
import { useEffect, useState } from "react";

const Home = () => {
    const allProducts = useLoaderData()
    const [products, setProducts] = useState([]);
    const [btnStyle, setBtnStyle] = useState("All Products");
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    // console.log(products)
    useEffect(() => {
        setProducts(allProducts)
    }, [allProducts])

    const handleToggleButtons = (category) => {
        setBtnStyle(category)
        if (category === "All Products") {
            setFilteredProducts(allProducts);
        }
        else {
            const newProducts = products.filter(product => product.category === category);
            setFilteredProducts(newProducts);
        }

    }


    return (
        <div>
            <Header></Header>
            <div className="max-w-[1300px] mx-auto w-11/12 md:w-full">
                <h2 className="font-bold text-5xl text-center">Explore Cutting-Edge Gadgets</h2>

                {/* buttons and cards */}
                <div className="mt-12 flex gap-4 md:gap-8">
                    <div className="p-2 md:p-6 flex-shrink-0 bg-white rounded-2xl border border-[#09080f]/10 flex flex-col gap-6 h-fit buttons">
                        <button onClick={() => handleToggleButtons("All Products")} className={btnStyle === 'All Products' ? "bg-[#8b34d3] rounded-4xl text-white text-xs md:text-lg md:font-extrabold px-5 py-3" : "bg-base-300 rounded-4xl text-stone-600 text-xs md:text-lg md:font-medium px-5 py-3"}>All Products</button>

                        <button onClick={() => handleToggleButtons("Laptops")} className={btnStyle === 'Laptops' ? "bg-[#8b34d3] rounded-4xl text-white text-xs md:text-lg md:font-extrabold px-5 py-3" : "bg-base-300 rounded-4xl text-stone-600 text-xs md:text-lg md:font-medium px-5 py-3"}>Laptops</button>

                        <button onClick={() => handleToggleButtons("Phones")} className={btnStyle === 'Phones' ? "bg-[#8b34d3] rounded-4xl text-white text-xs md:text-lg md:font-extrabold px-5 py-3" : "bg-base-300 rounded-4xl text-stone-600 text-xs md:text-lg md:font-medium px-5 py-3"}>Phones</button>

                        <button onClick={() => handleToggleButtons("Accessories")} className={btnStyle === 'Accessories' ? "bg-[#8b34d3] rounded-4xl text-white text-xs md:text-lg md:font-extrabold px-5 py-3" : "bg-base-300 rounded-4xl text-stone-600 text-xs md:text-lg md:font-medium px-5 py-3"}>Accessories</button>

                        <button onClick={() => handleToggleButtons("Smart Watches")} className={btnStyle === 'Smart Watches' ? "bg-[#8b34d3] rounded-4xl text-white text-xs md:text-lg md:font-extrabold px-5 py-3" : "bg-base-300 rounded-4xl text-stone-600 text-xs md:text-lg md:font-medium px-5 py-3"}>Smart Watches</button>

                    </div>
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts.length > 0 ?
                            filteredProducts.map((product, idx) => <Card key={idx} product={product}></Card>)
                            :
                            <div className="col-span-3 flex flex-col items-center justify-around p-8 rounded-2xl border border-[#09080f]/10 text-center">
                                <h3 className="text-3xl font-bold text-[#8b34d3] mb-4">No Items Available</h3>
                                <p className="text-lg text-stone-600 text-center">We are sorry, but there are no items available in this category at the moment. Please check back later or explore our other categories.</p>
                                <button
                                    onClick={() => handleToggleButtons("All Products")}
                                    className="mt-6 py-3 px-3 md:px-6 bg-[#8b34d3] text-white md:text-lg md:font-bold rounded-4xl hover:bg-[#7a2db9] transition-colors">
                                    Explore All Products
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;