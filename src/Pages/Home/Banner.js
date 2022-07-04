import videoBG from "../../Assets/Videos/Couple Walking on a Beach Filmed with a Drone.mp4";
import RunoNavbar from "../../Shared/RunoNavbar";
import "../Home/Css/Banner.css";

const Banner = () => {
    return (
        <div className="bg-img lora">
            <div className="overlay"></div>
            <video src={videoBG} autoPlay loop muted></video>
            <div className="content">
                <RunoNavbar />

                <div className="flex justify-start flex-col main-content">
                    <div>
                        <span className="text-white rounded-md customBadge">
                            ADVENTURE
                        </span>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade">
                        <span className=" title text-white">
                            Richird Norton photorealistic rendering as real
                            photos
                        </span>
                    </div>
                    <div
                        className="text-gray-200 comment flex"
                        data-aos="fade-in"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                    >
                        <span className="pr-4">Date</span>
                        <p>
                            Progressively incentivize cooperative systems
                            through technically sound functionalities. The
                            credibly productivate seamless data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
