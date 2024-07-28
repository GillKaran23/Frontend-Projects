import { FaHome, FaUserTie } from "react-icons/fa";
import { RiHome5Fill, RiTimeFill } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbHomeFilled } from "react-icons/tb";
import house1 from "../assets/mioraimages/house1.jpg";
import house2 from "../assets/mioraimages/house2.jpg";
import { IoPricetagSharp } from "react-icons/io5";
import { AiOutlineFileProtect } from "react-icons/ai";

let Properties = () => {
    let propertiesbenefits = [
        {
            id: 1,
            head: <FaHome />,
            text: "Sell Your Home"
        }, {
            id: 2,
            head: <RiHome5Fill />,
            text: "Rent Your Home"
        }, {
            id: 3,
            head: <SiHomeassistantcommunitystore />,
            text: "Buy a Home"
        }, {
            id: 4,
            head: <TbHomeFilled />,
            text: "Free Marketing"
        },
    ];
    let propertiesfeatures = [
        {
            id: 1,
            head: <FaUserTie/>,
            text: "Experienced"
        }, {
            id: 2,
            head: <IoPricetagSharp/>,
            text: "Competitive Price"
        }, {
            id: 3,
            head: <RiTimeFill/>,
            text: "On Time"
        }, {
            id: 4,
            head: <AiOutlineFileProtect />,
            text: "Best Materials"
        },
    ];
    let properties = [
        {
            id: 1,
            image: house1,
            name: "Great Villa",
            price: 500000,
            by: "John Doe"
        }, {
            id: 2,
            image: house2,
            name: "Royal Villa",
            price: 1000000,
            by: "Michael Brown"
        }, {
            id: 3,
            image: house1,
            name: "Shahi Villa",
            price: 100000,
            by: "Emily Davis"
        }, {
            id: 4,
            image: house2,
            name: "Great Mansion",
            price: 300000,
            by: "Jane Smith"
        }, {
            id: 5,
            image: house1,
            name: "Royal Niwas",
            price: 400000,
            by: "Alice Johnson"
        },
    ]
    return (
        <>
            <div className="w-full bg-gray-200">
                <div className="max-w-7xl mx-auto p-4 py-10">
                    <h1 className="text-center text-3xl font-semibold mb-10">Properties</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
                        {propertiesbenefits.map((value) => {
                            return (
                                <div key={value.id} className="group text-center cursor-pointer">
                                    <div className="flex justify-center">
                                        <h1 className="group-hover:scale-110 transform ease-in-out duration-300 font-bold text-4xl mb-2 text-estate-secondary">{value.head}</h1>
                                    </div>
                                    <p className="font-semibold text-xl mt-3">{value.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
                        {
                            properties.map((value) => {
                                return (
                                    <div key={value.id} className="bg-white rounded-lg overflow-hidden">
                                        <img src={value.image} alt="houses"></img>
                                        <div className="p-5">
                                            <h2 className="text-lg text-estate-secondary font-bold">{value.name}</h2>
                                            <p className="text-base font-semibold text-teal-700">{value.price}</p>
                                            <hr className="border-2 border-estate-secondary rounded-full mt-3 mb-3"></hr>
                                            <p className="text-base font-bold text-teal-700"><span className="text-black">By:</span> {value.by}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
                        {propertiesfeatures.map((value) => {
                            return (
                                <div key={value.id} className="group text-center cursor-pointer">
                                    <div className="flex justify-center">
                                        <h1 className="group-hover:scale-110 transform ease-in-out duration-300 font-bold text-4xl mb-2 text-teal-700">{value.head}</h1>
                                    </div>
                                    <p className="font-semibold text-estate-secondary text-xl mt-3">{value.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    );
}
export default Properties;