import { Link } from "react-router-dom";
import pizzalogo from "./assets/pizzaimages/pizza_logo.png";

let HomeScreen = () => {
    let projects = [
        {
            id: 1,
            img: pizzalogo,
            link: "/pizzie/"
        }
    ];
    return (
        <>
            <div className="w-full md:h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white">
                <div className="max-w-7xl mx-auto p-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Welcome to My Frontend Projects</h1>
                    <p className="text-lg md:text-2xl mb-5 text-center">Hi, I{"'"}m Karandeep Singh Gill. I{"'"}m currently creating various Front-End Websites using ReactJS and Tailwind CSS to enhance the skills. Through these projects, I aim to master modern Web Development Techniques and build responsive, aesthetically pleasing applications.</p>
                    <p className="text-2xl mb-8 font-semibold text-center">Behold, a showcase of my creations :</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                            projects.map((value) => {
                                return (
                                    <div key={value.id} className="flex justify-center">
                                        <Link to={value.link} className="transform hover:scale-105 transition duration-300 ease-in-out">
                                            <img src={value.img} alt="Logo" className="shadow-2xl h-24 rounded-lg bg-white p-2" />
                                        </Link>
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
export default HomeScreen;