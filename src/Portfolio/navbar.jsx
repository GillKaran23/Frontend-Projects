import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { GoHomeFill, GoProject } from "react-icons/go";
import { GrDocument, GrTechnology } from "react-icons/gr";
import { MdWorkspacesFilled } from "react-icons/md";
import PortAbout from "./portabout";
import PortHome from "./PortHome";
import PortResume from "./PortResume";

const PortNavbar = () => {
    let [screen, setScreen]=useState(1);
    let menuitems = [
        {
            id: 1,
            logo: <GoHomeFill />,
            text: "Home",
        }, {
            id: 2,
            logo: <BsPersonFill />,
            text: "About",
        }, {
            id: 3,
            logo: <GrDocument />,
            text: "Resume",
        }, {
            id: 4,
            logo: <GrTechnology />,
            text: "Skills",
        }, {
            id: 5,
            logo: <MdWorkspacesFilled />,
            text: "Experience",
        }, {
            id: 6,
            logo: <GoProject />,
            text: "Projects"
        },
    ];
    return (
        <>
        <div className="fixed left-2 bottom-2 top-2 shadow-xl hidden md:block bg-gray-200 rounded-xl z-50">
            <div className="text-3xl p-4 space-y-7">
                {
                    menuitems.map((value) => {
                        return (
                            <div key={value.id} className="flex relative items-center gap-3 cursor-pointer group" >
                                <div><button onClick={()=>{setScreen(value.id)}}>{value.logo}</button></div>
                                <div className="absolute left-12 text-white bg-black hidden group-hover:block text-base rounded-xl px-2 py-1">{value.text}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>

        
        <div className="left-0 bottom-0 right-0 px-8 fixed md:hidden bg-gray-200 flex justify-between p-4 rounded-t-xl z-50">
            {
                menuitems.map((value)=>{
                    return(
                        <div key={value.id} className="text-3xl">
                           <button onClick={()=>{setScreen(value.id)}}>{value.logo}</button>
                        </div>
                    );
                })
            }
        </div>

        <div>
            {
                screen === 1? <PortHome/> : screen === 2 ? <PortAbout/> : screen === 3? <PortResume/> : <></>
            }
        </div>

        </>
    );
};

export default PortNavbar;