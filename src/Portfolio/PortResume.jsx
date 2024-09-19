import resume from "../assets/Resume/Karandeep_Gill_Resume.pdf";

let PortResume = () => {
    return (
        <div className="p-4 md:p-20 pt-10 pb-28 flex flex-col gap-4 md:gap-8 justify-center h-screen">
            <iframe 
                src={resume} 
                className="w-full h-[80vh] md:h-full" 
                title="Karandeep's Resume"
            />
        </div>
    );
}

export default PortResume;
