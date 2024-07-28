import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import house1 from "../assets/mioraimages/house1.jpg";
import house2 from "../assets/mioraimages/house2.jpg";

let EstateImageSlider = () => {
    let sliderdata = [
        {
            id: 1,
            image: house1,
            text: "Worldclass, Affordable, Trusted & Amenities."
        }, {
            id: 2,
            image: house2,
            text: "Best Place to Buy & Sell your Dream Homes."
        }, {
            id: 3,
            image: house1,
            text: "Best Materials & Competitive Price."
        }, {
            id: 4,
            image: house2,
            text: "Best Places to live with your family."
        },
    ];
    return (
        <>
            <Splide
                options={{
                    type: "loop",
                    autoplay: true,
                    perPage: 1,
                    interval: 3000,
                    height: "500px",
                    speed: 2000,
                    easing: "ease-in-out",
                }}
                aria-label="Miora Images"
            >
                {
                    sliderdata.map((value) => {
                        return (
                            <SplideSlide key={value.id}>
                                <div className="relative w-full h-full">
                                    <img
                                        className="object-cover w-full h-full"
                                        src={value.image}
                                        alt="Slide"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                                        <span className="text-white text-center font-bold text-lg md:text-3xl">{value.text}</span>
                                    </div>
                                </div>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </>
    );
};

export default EstateImageSlider;
