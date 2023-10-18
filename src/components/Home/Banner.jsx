import bg from '../../assets/bg.jpg';
import banner from '../../assets/banner.png'
import { BsArrowRight } from 'react-icons/bs'

const Banner = () => {
    return (
        <div className="hero h-[80vh] bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className=" bg-opacity-60"></div>
            <div className="hero-content">
                <div className="flex justify-between items-center gap-28">
                    <div className='text-[#666]'>
                        <h1 className='text-xl font-bold mb-4'>Foodies</h1>
                        <q>Good food is the foundation of genuine happiness.</q>
                        <p> - Auguste Escoffier</p>
                        <button className='btn normal-case bg-[#FF0000] text-white mt-3 flex items-center justify-center'>
                            <p>Order Now</p>
                            <BsArrowRight></BsArrowRight>
                        </button>
                    </div>
                    <div>
                        <img className='h-[50vh]' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;