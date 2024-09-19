import profileimg from "../assets/pizzaimages/sanji.jpg";
let PortHome = () =>{
    return(
        <div className="p-20 pt-10 pb-28 flex flex-col gap-8 justify-center">
            <div className="text-center text-5xl font-bold">
                Full-Stack Developer
            </div>
            <div className="flex justify-center">
                <img className="rounded-full max-w-96 max-h-96" src={profileimg}/>
            </div>
            <div className="text-center text-5xl font-bold">
                Karandeep Singh Gill
            </div>
        </div>
    );
}
export default PortHome;