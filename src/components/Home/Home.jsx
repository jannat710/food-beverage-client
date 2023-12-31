import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import Feedback from "../MoreFeatures/FeedBack/Feedback";
import PhotoGallery from "../MoreFeatures/PhotoGallery/PhotoGallery";

const Home = () => {
    const brands = useLoaderData();

    return (

        <div className="py-10 font-display">
            <Banner></Banner>
            <h1 className="text-4xl font-bold text-center">Top <span className="text-[#82B440]">Brands</span></h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 py-10">
                {
                    brands.map(brand => <Brands key={brand.id} brands={brand}></Brands>)
                }
            </div>
            <Feedback></Feedback>
            <PhotoGallery></PhotoGallery>

        </div>

    );
};

export default Home;