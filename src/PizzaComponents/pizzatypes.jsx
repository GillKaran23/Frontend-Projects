import { useState } from 'react';
import { FaStar, FaRegHeart, FaHeart, FaShoppingCart } from 'react-icons/fa';
import pizza1 from "../assets/pizzaimages/pizza1.png";
import pizza2 from "../assets/pizzaimages/pizza2.png";
import pizza3 from "../assets/pizzaimages/pizza3.png";
import pizza4 from "../assets/pizzaimages/pizza4.png";
import pizza5 from "../assets/pizzaimages/pizza5.png";

const PizzaTypes2 = () => {
    const pizzas = [
        {
            id: 1,
            img: pizza1,
            name: "Pepperoni",
            price: 8.99,
            rating: 4.0,
        },
        {
            id: 2,
            img: pizza2,
            name: "Corn",
            price: 7.99,
            rating: 3.0,
        },
        {
            id: 3,
            img: pizza3,
            name: "BBQ",
            price: 5.99,
            rating: 5.0,
        },
        {
            id: 4,
            img: pizza4,
            name: "Italian",
            price: 9.99,
            rating: 3.0,
        },
        {
            id: 5,
            img: pizza5,
            name: "Caprese",
            price: 11.99,
            rating: 4.0,
        },
    ];

    const [favorite, setFavorite] = useState({});

    const handleFavoriteClick = (id) => {
        setFavorite((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>
            <div className="pizza-main-section">
                <div className="max-w-5xl p-4 mx-auto py-16">
                    <h1 className="mb-10 text-white text-center text-5xl font-bold">Our <span className='text-red-600'>Hottest Pizzas</span></h1>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                        {pizzas.map((pizza) => (
                            <div key={pizza.id} className='group flex flex-col justify-center items-center bg-gradient-to-t border-2 border-gray-500 from-black to-gray-800 rounded-2xl p-4 shadow-lg cursor-pointer'>
                                <div className='w-40 h-36 overflow-hidden flex justify-center mb-2'>
                                    <img src={pizza.img} alt={pizza.name} className='w-full h-full object-fill group-hover:scale-125 transition-transform duration-300 ease-in-out' />
                                </div>
                                <h2 className="text-lg font-semibold text-white mt-1">{pizza.name}</h2>
                                <div className="flex justify-between w-full mt-1 gap-2">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((star, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < pizza.rating ? "text-yellow-400" : "text-gray-400"}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-red-500">$<span className='text-white'>{pizza.price.toFixed(2)}</span></p>
                                </div>
                                <div className="flex justify-between w-full mt-4 px-5">
                                    <div onClick={() => handleFavoriteClick(pizza.id)} className="cursor-pointer">
                                        {favorite[pizza.id] ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-white" />}
                                    </div>
                                    <div className="cursor-pointer">
                                        <FaShoppingCart className="text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PizzaTypes2;
