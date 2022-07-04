import Footer from "../../Shared/Footer";
import Banner from "./Banner";
import EditorsPick from "./EditorsPick/EditorsPack";
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
      <EditorsPick />
      <Footer />
    </div>
  );
};

export default Home;
