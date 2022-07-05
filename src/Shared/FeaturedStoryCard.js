import {
    BookOutlined,
    HeartFilled,
    HeartOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Card } from "flowbite-react";

const FeaturedStoryCard = ({ isAdmin, isLiked, setLiked, elephent }) => {
    return (
        <div className="w-fit mx-auto relative">
            <Card horizontal={true} imgSrc={elephent}>
                {isAdmin && (
                    <SettingOutlined className="absolute top-2 right-2" />
                )}
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Keepers of Ganesh: The Vanish Art of Mahout
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    As Asian elephants face a myriad of threats of their
                    existance, the 4,000 year old relationship between human and
                    elephents is in crisis.
                </p>
                <div className="flex items-center h-fit">
                    <div className="mx-2">
                        {isLiked ? (
                            <HeartFilled className="text-2xl text-green-500" />
                        ) : (
                            <HeartOutlined
                                onClick={() => setLiked(!isLiked)}
                                className="text-2xl hover:text-gray-900"
                            />
                        )}
                    </div>
                    <div>
                        <BookOutlined className="text-2xl mx-2" />{" "}
                        <span>17 min ago</span>
                    </div>
                </div>
                <div className="flex">
                    <button className="text-left bg-blue-400 text-white px-4 py-1 rounded-lg">
                        Read more
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default FeaturedStoryCard;
