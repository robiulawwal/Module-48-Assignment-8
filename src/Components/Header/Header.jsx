
import vrImage from '../../assets/banner.jpg';

const Header = () => {
  
    return (
        <div>
             <div className="bg-[#9538E2] text-white mx-8 rounded-b-3xl pb-28 md:pb-52">
                <div className="max-w-[1280px] mx-auto text-center space-y-12 py-8">
               
                    <h1 className="px-2 md:px-0 text-4xl md:text-6xl font-bold leading-16">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="px-2 md:px-0 leading-relaxed">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="py-7 btn px-9 text-[#9538e2] text-xl font-bold bg-white rounded-[32px] shadow-[inset_0px_4px_50px_0px_rgba(11,11,11,0.15)]">
                        Shop Now
                    </button>
                </div>

            </div>
            <div className="p-4 border-white border-2 h-3/4 max-w-[80%] w-5/7 bg-white/30 mx-auto rounded-3xl transform -translate-y-1/3">
                <img className="rounded-3xl w-full object-cover lg:h-[500px] md:h-96" src={vrImage} alt="" />
            </div>
        </div>
    );
};

export default Header;