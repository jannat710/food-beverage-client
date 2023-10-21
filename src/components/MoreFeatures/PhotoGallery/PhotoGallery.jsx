
import Marquee from "react-fast-marquee";

import g1 from '../../../assets/g1.jpg';
import g2 from '../../../assets/g2.jpg';
import g3 from '../../../assets/g3.png';
import g4 from '../../../assets/g4.jpg';
import g5 from '../../../assets/g5.jpg';
import g6 from '../../../assets/g6.jpg';
import g7 from '../../../assets/g7.jpg';
import g8 from '../../../assets/g8.jpg';

import g9 from '../../../assets/g9.jpg';
import g10 from '../../../assets/g10.jpg';
import g11 from '../../../assets/g11.jpg';
import g12 from '../../../assets/g12.jpg';
import g13 from '../../../assets/g13.jpg';
import g14 from '../../../assets/g14.jpg';
import g15 from '../../../assets/g15.jpg';
import g16 from '../../../assets/g16.jpg';


const PhotoGallery = () => {
    return (
        <div className="pt-5 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center">Photo <span className="text-[#82B440]">Gallery</span></h1>
            <p className=" py-5 text-center text-[#666] mt-4">Check out these amazing photos!</p>
            <Marquee direction="left" speed={70} pauseOnHover={true} gradient={true}>
                <div className="flex ">
                <img className="h-52 w-44" src={g1} alt="" />
                <img className="h-52 w-44" src={g2} alt="" />
                <img className="h-52 w-44" src={g3} alt="" />
                <img className="h-52 w-44" src={g4} alt="" />
                <img className="h-52 w-44" src={g5} alt="" />
                <img className="h-52 w-44" src={g6} alt="" />
                <img className="h-52 w-44" src={g7} alt="" />
                <img className="h-52 w-44" src={g8} alt="" />
                </div>
            </Marquee>
            <Marquee className="mt-5" direction="right" speed={70} pauseOnHover={true} gradient={true}>
                <div className="flex ">
                <img className="h-52 w-44" src={g9} alt="" />
                <img className="h-52 w-44" src={g10} alt="" />
                <img className="h-52 w-44" src={g11} alt="" />
                <img className="h-52 w-44" src={g12} alt="" />
                <img className="h-52 w-44" src={g13} alt="" />
                <img className="h-52 w-44" src={g14} alt="" />
                <img className="h-52 w-44" src={g15} alt="" />
                <img className="h-52 w-44" src={g16} alt="" />
                </div>
            </Marquee>
            
        </div>
    );
};

export default PhotoGallery;