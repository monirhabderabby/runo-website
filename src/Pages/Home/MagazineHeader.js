import travel from "../../Assets/Images/travel.jpg";

const MagazineHeader = () => {
    return (
        <section className="w-[100%] h-full px-4 md:px-8 lg:px-12">
            <div className="block md:flex md:justify-center ">
                <div className="flex-1">
                    <div className="p-6 shadow-2xl bg-white h-full lg:h-[500px] w-fit mx-auto relative top-[-10%] overflow-hidden">
                        <img
                            src={travel}
                            alt="travel img"
                            className="h-full hover:scale-[120%] duration-300"
                        />
                    </div>
                </div>

                <div className="flex-1 px-2 lg:px-20 my-8">
                    <h1 className="font-semibold my-7">
                        Our latest magazine edition
                    </h1>
                    <p className="leading-7 my-5">
                        The world’s most beautiful yoga retreats, a tour through
                        dynamic Rotterdam and marvelling at five sensational
                        beaches: the November edition is full of travel
                        inspiration, perfect for daydreaming.
                    </p>
                    <div>
                        <button className="px-4 py-2 bg-blue-400 rounded-3xl text-white mx-2 hover:bg-blue-500 transition-colors my-2">
                            Open the magazine
                        </button>
                        <button className="px-4 mx-2 text-blue-400 py-2 rounded-3xl border-2 border-blue-400 hover:text-blue-500 my-2">
                            All magazine
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MagazineHeader;
