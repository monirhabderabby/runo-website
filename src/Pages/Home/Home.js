import Footer from "../../Shared/Footer";
import Banner from "./Banner";
import EditorsPick from "./EditorsPick/EditorsPack";
import FeaturedStory from "./FeaturedStory/FeaturedStory";
import MagazineHeader from "./MagazineHeader";
import PopulerTopics from "./Populer topics/PopulerTopics";
import Quotes from "./Quotes/Quotes";

const Home = () => {
    return (
        <div>
            <Banner />
            <MagazineHeader />
            <PopulerTopics />
            <Quotes />
            <FeaturedStory />
            <EditorsPick />
            <Footer />
        </div>
    );
};

export default Home;
