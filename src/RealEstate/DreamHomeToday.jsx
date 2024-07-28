import { TiTick} from "react-icons/ti";
import house1 from "../assets/mioraimages/house1.jpg";
import house2 from "../assets/mioraimages/house2.jpg";

let DreamHome = () => {
    let properties = [
        {
            id: 1,
            head: "56,180",
            text: "In property sales"
        }, {
            id: 2,
            head: "99%",
            text: "Customer satisfaction"
        }, {
            id: 3,
            head: "25K+",
            text: "Property Transaction"
        }, {
            id: 4,
            head: "2,918",
            text: "Price Reduce"
        },
    ]
    return (
        <>
            <div className="w-full bg-gray-200">
                <div className="max-w-7xl mx-auto p-4 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 mb-16 gap-5">
                        <img src={house2} className="rounded-xl mx-auto" alt="House"></img>
                        <div className="bg-gray-300 mx-auto px-5 py-2 rounded-xl text-lg">
                            <p className="mb-6">Creating quality urban lifestyles, building stronger communities and creating a safe haven for the general populace is what we do, we give affordable house for sell, rent and also lease great properties for any kind of usage.</p>
                            <p className="mb-6">We give premium offers to all our client and our customer service is top notch</p>
                            <p className="flex gap-2 font-semibold items-center"><TiTick className="text-3xl text-teal-700"/>Worldclass</p>
                            <p className="flex gap-2 font-semibold items-center"><TiTick className="text-3xl text-teal-700"/>Affordable</p>
                            <p className="flex gap-2 font-semibold items-center"><TiTick className="text-3xl text-teal-700"/>Trusted</p>
                            <p className="flex gap-2 font-semibold items-center"><TiTick className="text-3xl text-teal-700"/>Amenities</p>
                        </div>
                    </div>
                    <h1 className="text-center text-3xl font-semibold mb-4">Find Your Dream Home Today</h1>
                    <div className="w-full flex justify-center mb-8">
                        <button className="text-xl text-white font-semibold py-2 px-4 rounded-md bg-teal-700 hover:bg-estate-secondary">Contact US</button>
                    </div>
                    <img src={house1} alt="House" className="mx-auto rounded-lg mb-10"></img>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {properties.map((value) => {
                            return (
                                <div key={value.id} className="text-center">
                                    <h1 className="font-bold text-3xl mb-2 text-estate-secondary">{value.head}</h1>
                                    <p className="font-semibold">{value.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
export default DreamHome;