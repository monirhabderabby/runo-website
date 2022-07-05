import { useState } from "react";
import elephent from "../../../Assets/Images/elephent.jpg";
import FeaturedStoryCard from "../../../Shared/FeaturedStoryCard";
const FeaturedStory = () => {
    const [isLiked, setLiked] = useState(false);
    const [isAdmin, setAdmin] = useState(true);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <FeaturedStoryCard {...{ isAdmin, isLiked, setLiked, elephent }} />
            <FeaturedStoryCard {...{ isAdmin, isLiked, setLiked, elephent }} />
        </div>
    );
};

export default FeaturedStory;
