import { Link } from "react-router-dom";
import mioralogo from "../assets/mioraimages/miora_logo.png";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
let EstateFooter = () => {
    let quicklinks = [
        {
            id: 1,
            text: "Home"
        }, {
            id: 2,
            text: "About"
        }, {
            id: 3,
            text: "Properties"
        }, {
            id: 4,
            text: "Pages"
        }, {
            id: 5,
            text: "Blogs"
        }, {
            id: 6,
            text: "Contacts"
        }, {
            id: 7,
            text: "Privacy & Policy"
        },
    ];
    let contact = [
        {
            id: 1,
            logo: <FaLocationDot />,
            text: "Amritsar, Punjab, India"
        },
        {
            id: 2,
            logo: <MdEmail />,
            text: "mioraestate@info.com"
        },
        {
            id: 3,
            logo: <IoCallSharp />,
            text: "+91 1234567890"
        },
    ]
    return (
        <>
            <div className="w-full bg-estate-primary">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-10">
                        <div className="flex flex-col gap-6">
                            <Link to="/miora/"><img className="w-40 h-14" src={mioralogo} alt="Miora Logo" /></Link>
                            <p className="text-estate-secondary font-semibold text-base">Your Premier Destination for Luxury Real Estate and Exceptional Properties.</p>
                            <div className="flex gap-4 text-3xl">
                                <BsTwitterX className="cursor-pointer hover:text-estate-secondary" />
                                <FaFacebook className="cursor-pointer hover:text-estate-secondary" />
                                <BsInstagram className="cursor-pointer hover:text-estate-secondary" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl font-bold mt-3 text-estate-secondary mb-3 cursor-pointer hover:text-teal-700">Quick Link</h1>
                            <ul className="list-disc list-inside font-semibold text-base">
                                {
                                    quicklinks.map((value) => {
                                        return (
                                            <li key={value.id} className="hover:text-estate-secondary hover:underline cursor-pointer">{value.text}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl font-bold mt-3 mb-3 text-estate-secondary cursor-pointer hover:text-teal-700">News Letter</h1>
                            <input type="email" placeholder="Enter Email Address" className="p-2 px-4 text-gray-500 rounded-md" required></input>
                            <button className="bg-teal-700 px-5 py-2 text-lg rounded-lg hover:bg-estate-secondary text-white">Subscribe</button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl font-bold mt-3 mb-3 text-estate-secondary cursor-pointer hover:text-teal-700">Contact</h1>
                            {
                                contact.map((value) => {
                                    return (
                                        <div key={value.id} className="flex gap-3 items-center cursor-pointer hover:text-estate-secondary font-semibold">
                                            <div className="text-xl">{value.logo}</div>
                                            <p>{value.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EstateFooter;