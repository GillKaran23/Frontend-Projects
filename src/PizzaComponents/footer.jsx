import { Link } from "react-router-dom";
import pizzalogo from "../assets/pizzaimages/pizza_logo.png";
import { FaApple, FaFacebook } from "react-icons/fa6";
import { CgInstagram } from "react-icons/cg";
import { BsAndroid, BsTwitterX } from "react-icons/bs";

let PizzaFooter = () => {
    return (
        <div className="w-full bg-gradient-to-t from-slate-800 via-gray-800 to-black text-white py-12 border-t-2 border-t-gray-700">
            <div className="max-w-7xl mx-auto p-4">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col mb-6">
                        <div className="mb-6">
                            <Link to="/pizzie/">
                                <img className="w-40 h-14" src={pizzalogo} alt="Pizza Logo" />
                            </Link>
                        </div>
                        <div>
                            <p>Book your Pizza in minutes.<br /> Get your tasty pizza at your home.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 md:items-start mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-red-600 mb-5">Company</h2>
                            <ul className="space-y-2">
                                <li><Link to="/pizzie/" className="hover:underline">About</Link></li>
                                <li><Link to="/pizzie/" className="hover:underline">Careers</Link></li>
                                <li><Link to="/pizzie/" className="hover:underline">Blogs</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-red-600 mb-5">Services</h2>
                            <ul className="space-y-2">
                                <li><Link to="/pizzie/" className="hover:underline">Party Reservations</Link></li>
                                <li><Link to="/pizzie/" className="hover:underline">Corporate Events</Link></li>
                                <li><Link to="/pizzie/" className="hover:underline">Catering</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-red-600 mb-5">More</h2>
                            <ul className="space-y-2">
                                <li><Link to="/pizzie/" className="hover:underline">Takeaway</Link></li>
                                <li><Link to="/pizzie/" className="hover:underline">Home Delivery</Link></li>
                                <li><Link to="/pizzie/" className="hover:underline">Resort Booking</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-4 mt-8 md:mt-0">
                            <Link className="text-xl p-3 bg-gray-600 rounded-full" to="#"><FaFacebook /></Link>
                            <Link className="text-xl p-3 bg-gray-600 rounded-full" to="#"><CgInstagram /></Link>
                            <Link className="text-xl p-3 bg-gray-600 rounded-full" to="#"><BsTwitterX /></Link>
                        </div>
                        <h2 className="mt-5 font-semibold text-2xl">Discover Our App</h2>
                        <div className="flex flex-col md:flex-row gap-2 mt-5">
                            <button className="flex items-center justify-center rounded-full bg-gray-700 text-white py-2 px-3 gap-2"><BsAndroid className="text-xl"/>Android</button>
                            <button className="flex items-center justify-center rounded-full bg-gray-700 text-white py-2 px-3 gap-2"><FaApple className="text-xl"/>Apple</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaFooter;
