import { BiChevronDown, BiSearch } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import pizzalogo from "../assets/pizzaimages/pizza_logo.png";

const PizzaNavbar = () => {
    return (
        <div className="w-full bg-gradient-to-t from-gray-800 to-black text-white border-b-2 border-b-gray-700">
            <div className="max-w-7xl mx-auto">
                <div className="flex space-y-2 justify-between items-center p-4 flex-col md:flex-row">
                    <div>
                        <Link to="/"><img className="w-40 h-14" src={pizzalogo} alt="Pizza Logo" /></Link>
                    </div>
                    <div className="items-center flex justify-between gap-6">
                        <Link to="#" className="hover:underline">Home</Link>
                        <div className="group cursor-pointer">
                            <div className="flex items-center gap-1 text-white">Services <BiChevronDown /></div>
                            <ul className="hidden group-hover:block absolute p-2 py-3 bg-gray-800 rounded-xl">
                                <li className="hover:underline">Pizza Resort</li>
                                <li className="hover:underline">Pizzeria</li>
                                <li className="hover:underline">Dine-In</li>
                                <li className="hover:underline">Takeaway</li>
                                <li className="hover:underline">Home Delivery</li>
                                <li className="hover:underline">Catering</li>
                                <li className="hover:underline">Party Reservations</li>
                                <li className="hover:underline">Corporate Events</li>
                            </ul>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="flex items-center gap-1 text-white">Menu <BiChevronDown /></div>
                            <ul className="hidden group-hover:block absolute p-2 py-3 bg-gray-800 rounded-xl">
                                <li className="hover:underline">Margherita Pizza</li>
                                <li className="hover:underline">Pepperoni Pizza</li>
                                <li className="hover:underline">BBQ Chicken Pizza</li>
                                <li className="hover:underline">Veggie Pizza</li>
                                <li className="hover:underline">Soft Drinks</li>
                                <li className="hover:underline">Beers</li>
                                <li className="hover:underline">Desserts</li>
                            </ul>
                        </div>
                        <Link to="#" className="hover:underline">Contact</Link>
                    </div>
                    <div className="items-center flex justify-between gap-4">
                        <button className="text-2xl"><BiSearch /></button>
                        <button className="text-2xl"><CgWorkAlt /></button>
                        <button className="px-6 py-1 rounded-full border-2 border-white hover:bg-gray-400 hover:text-gray-800 font-semibold">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PizzaNavbar;
