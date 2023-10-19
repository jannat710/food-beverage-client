import Feedback from "../MoreFeatures/Feedback/Feedback";
import PhotoGallery from "../MoreFeatures/PhotoGallery/PhotoGallery";
import Banner from "./Banner";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <Banner></Banner>
            <h1>This is home</h1>
            <Feedback></Feedback>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;