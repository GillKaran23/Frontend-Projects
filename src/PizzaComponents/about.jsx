import { FaPizzaSlice } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

let PizzaAbout = () => {
    let aboutcard = [
        {
            id: 1,
            head: "Food Order",
            logo: <FaSackDollar className="text-7xl text-yellow-600 mb-2" />,
            para: "Food is the necessity of life. It provides nutrition, sustenance growth to human body."
        }, {
            id: 2,
            head: "Best Pizzas",
            logo: <FaPizzaSlice className="text-7xl text-yellow-600 mb-2" />,
            para: "Best pizzas available here fresh, delicious, and unforgettable."
        }
    ];
    return (
        <>
            <div className="pizza-main-section">
                <div className="max-w-5xl mx-auto p-4 py-16">
                    <h1 className="text-5xl text-center text-white font-bold mb-10">Get Started <span className="text-red-600 font-bold">Today</span></h1>
                    <p className="text-3xl text-white font-semibold mb-4">Everything you need to satisfy your pizza cravings in one place.</p>
                    <p className="md:text-2xl text-lg text-white mb-10"><span className="text-red-600 font-semibold">We offer the finest pizza services:</span> Fresh, handcrafted pizzas, quick and reliable delivery, and exceptional customer service. Experience the best in taste and quality with Pizzie. Order your favorite pizza today!</p>
                    <div className="flex gap-5 md:flex-row flex-col">
                        {
                            aboutcard.map((value) => {
                                return (
                                    <div key={value.id} className="text-white text-center border-2 bg-gradient-to-b from-black to-gray-800 border-white p-5 rounded-xl w-56 mx-auto md:mx-0 cursor-pointer">
                                        <div className="flex justify-center">
                                            {value.logo}
                                        </div>
                                        <h2 className="text-2xl font-semibold mb-4 text-red-600 hover:underline">{value.head}</h2>
                                        <p>{value.para}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default PizzaAbout;