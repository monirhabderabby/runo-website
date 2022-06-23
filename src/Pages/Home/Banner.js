import React from "react";
import RunoNavbar from "../../Shared/RunoNavbar";
import "../Home/Css/Banner.css";
import videoBG from '../../Assets/Videos/drone.mp4'

const Banner = () => {
    return (
        <div className="bg-img">
            <div className="overlay"></div>
            <video src={videoBG} autoPlay loop muted></video>
            <div className="content">
                <RunoNavbar />

                <div className="flex justify-start flex-col main-content">
                    <div>
                        <span className="text-white rounded-md customBadge">ADVENTURE</span>
                    </div>
                    <div>
                        <span className=" title text-white">Richird Norton photorealistic rendering as real photos</span>
                    </div>
                    {/* post note */}
                    <div className="text-gray-200 comment flex">
                        <span className="pr-8">Date</span>
                        <p>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
