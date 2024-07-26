import { BiSolidMedal } from "react-icons/bi";
import { GiFrenchFries } from "react-icons/gi";
import { IoRestaurant } from "react-icons/io5";

let PizzaHome = () => {
    let homecard = [
        {
            id: 1,
            logo: <BiSolidMedal className="text-6xl text-yellow-600 mb-2" />,
            para: "10k Reviews",
            para1: "(4.8)"
        }, {
            id: 2,
            logo: <GiFrenchFries className="text-6xl text-yellow-600 mb-2" />,
            para: "80+",
            para1: "Items"
        }, {
            id: 3,
            logo: <IoRestaurant className="text-6xl text-yellow-600 mb-2" />,
            para: "300+",
            para1: "Restaurants"
        }
    ];
    return (
        <>
            <div className="pizza-main-section">
                <div className="max-w-5xl mx-auto p-4 py-10 md:py-20">
                    <h1 className="md:text-5xl text-3xl text-white font-semibold mb-4 md:mb-10">Savor Signature Dishes Every Time, With Lightning - <span className="text-red-500 font-bold">Fast Delivery</span> to your Doorstep.</h1>
                    <p className="md:text-xl text-lg text-white font-semibold mb-5">Be the fastest in delivery your health food and with us order your best food anytime and anywhere.</p>
                    <button className="px-6 py-2 mb-10 text-white hover:bg-red-500 hover:rounded-3xl rounded-r-2xl rounded-es-2xl rounded-ss-sm bg-orange-500 font-semibold text-xl">Get Started</button>
                    <div className="flex flex-wrap gap-6">
                        {
                            homecard.map((value) => {
                                return (
                                    <div key={value.id} className="text-white w-32 flex-shrink-0 text-center border-2 bg-gradient-to-b from-black to-gray-900 border-white p-4 rounded-2xl cursor-pointer">
                                        <div className="flex justify-center">
                                            {value.logo}
                                        </div>
                                        <p>{value.para}</p>
                                        <p>{value.para1}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default PizzaHome;