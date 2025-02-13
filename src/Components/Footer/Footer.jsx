
const Footer = () => {
  return (
    <div className="mt-10 flex bg-white">
      <footer className="w-11/12 mx-auto pt-16 px-10 text-center lg:max-w-[1000px] space-y-3 ">
        <h2 className="text-2xl font-bold">Gadget Heaven</h2>
        <p className="text-base text-gray-600 border-b-2 border-gray-200 pb-4">Leading the way in cutting-edge technology and innovation.</p>
        <ul className="flex justify-center gap-8 md:justify-between flex-wrap">
          <li>
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="text-base text-gray-600">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </li>
          <li>
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="text-base text-gray-600">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </li>
          <li>
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="text-base text-gray-600">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;