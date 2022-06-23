import React from "react";
import video from "../../../Assets/Videos/drone.mp4";

const Quotes = () => {
    return (
        <div className="h-[80vh] md:h-[70vh] relative">
            <div className="overlay"></div>
            <video
                src={video}
                autoPlay
                loop
                muted
                className="h-[100%] w-100]"
            ></video>
            <div className="absolute px-2 top-0 h-full w-[100%] flex justify-center items-center">
                <div className="w-full lg:w-[40%] text-center">
                    <p className="w-24 mx-auto mb-8 badge text-white">
                        FASHION
                    </p>
                    <p className="my-[13px]">
                        <span className="text-white text-2xl md:text-[36px] leading-[48px] lora">
                            Richird Norton photorealistic rendering as real
                            photos
                        </span>
                    </p>
                    <p className="leading-[20px] text-[12px] text-[#E5E5E5] lora">
                    Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Quotes;
