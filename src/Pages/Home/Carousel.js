import React from "react";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
                <div className="w-full">
                <div className="flex justify-start flex-col main-content">
                    <div>
                        <span className="text-white rounded-md customBadge">ADVENTURE</span>
                    </div>
                    <div>
                        <span className=" title text-white">Richird Norton photorealistic rendering as real photos</span>
                    </div>
                    <div className="text-gray-200 comment flex">
                        <span className="pr-8">Date</span>
                        <p>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
                    </div>
                </div>
                </div>
                <div>
                <div className="flex justify-start flex-col main-content">
                    <div>
                        <span className="text-white rounded-md customBadge">ADVENTURE</span>
                    </div>
                    <div>
                        <span className=" title text-white">Richird Norton photorealistic rendering as real photos</span>
                    </div>
                    <div className="text-gray-200 comment flex">
                        <span className="pr-8">Date</span>
                        <p>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
                    </div>
                </div>
                </div>
                <div>
                <div className="flex justify-start flex-col main-content">
                    <div>
                        <span className="text-white rounded-md customBadge">ADVENTURE</span>
                    </div>
                    <div>
                        <span className=" title text-white">Richird Norton photorealistic rendering as real photos</span>
                    </div>
                    <div className="text-gray-200 comment flex">
                        <span className="pr-8">Date</span>
                        <p>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
                    </div>
                </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
