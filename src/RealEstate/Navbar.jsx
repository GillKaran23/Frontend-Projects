import { Link } from "react-router-dom";
import mioralogo from "../assets/mioraimages/miora_logo.png";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

let EstateNavbar = () => {
    let [nav, setNav] = useState(false);
    let navitems = [
        {
            id :1,
            text: "Home"
        },{
            id :2,
            text: "About"
        },{
            id :3,
            text: "Properties"
        },{
            id :4,
            text: "Pages"
        },{
            id :5,
            text: "Blogs"
        },{
            id :6,
            text: "Contact"
        },
    ];
    return (
        <>
            <div className="w-full bg-estate-primary">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <div>
                            <Link to="/"><img className="w-40 h-14" src={mioralogo} alt="Miora Logo" /></Link>
                        </div>
                        <div className="hidden lg:flex gap-5 text-lg font-semibold items-center">
                            {
                                navitems.map((value)=>{
                                    return(
                                        <div key={value.id} className="hover:text-estate-secondary cursor-pointer">{value.text}</div>
                                    );
                                })
                            }
                            <button className="bg-estate-secondary text-white py-2 px-5 rounded-md hover:bg-teal-700">LogIn</button>
                        </div>
                        {
                            nav ? <button onClick={() => setNav(!nav)} className="block lg:hidden text-4xl">
                            <RxCross2 />
                        </button> : <button onClick={() => setNav(!nav)} className="block lg:hidden text-4xl">
                            <BiMenu />
                        </button>
                        }
                    </div>
                </div>
                {
                    nav && (
                        <div className="w-[60%] h-screen fixed top-0 left-0 z-50 bg-estate-primary py-4 px-4">
                            <div>
                                <Link to="/miora/"><img className="w-40 h-14" src={mioralogo} alt="Miora Logo" /></Link>
                            </div>
                            <hr className="border-2 rounded-full border-estate-secondary mt-4 mb-6"></hr>
                            <div className="flex flex-col gap-2 text-lg font-semibold">
                                {
                                    navitems.map((value)=>{
                                        return(
                                            <Link key={value.id} to="#" className="hover:bg-estate-secondary hover:text-white p-3 rounded-md">{value.text}</Link>
                                        )
                                    })
                                }
                                <button className="bg-estate-secondary text-white py-2 px-5 rounded-md hover:bg-teal-700">LogIn</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default EstateNavbar;
