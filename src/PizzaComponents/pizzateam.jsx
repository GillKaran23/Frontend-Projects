import chef2 from "../assets/pizzaimages/sanji.jpg";
import chef3 from "../assets/pizzaimages/jessica.webp";
import chef1 from "../assets/pizzaimages/zeff.webp";
import chef4 from "../assets/pizzaimages/pudding.jpg";

let PizzaTeam = () => {
    let chefs = [ 
        { img: chef1, name: "Zeff", title: "Head Chef" },
        { img: chef2, name: "Vinsmoke Sanji", title: "Senior Chef" },
        { img: chef3, name: "Jessica", title: "Junior Chef" },
        { img: chef4, name: "Charlotte Pudding", title: "Junior Chef" }
    ];
    return (
        <div className="pizza-main-section">
            <div className="max-w-5xl p-4 mx-auto py-16">
                <h1 className="mb-10 text-white text-center text-5xl font-bold">Meet Our <span className="text-red-500">Best Team</span></h1>
                <div className="grid justify-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {chefs.map((chef, index) => (
                        <div key={index} className="group relative w-full rounded-2xl overflow-hidden h-72 mx-auto mb-5 cursor-pointer">
                            <img src={chef.img} className="w-full h-full group-hover:scale-125 brightness-50 transition-transform duration-300 ease-in-out"></img>
                            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2 text-left">
                                <p className="text-white text-lg font-semibold">{chef.name}</p>
                                <p className="text-white text-base">{chef.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PizzaTeam;
