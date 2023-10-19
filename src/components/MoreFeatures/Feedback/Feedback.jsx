import img from '../../../assets/feedback.png';

const Feedback = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Global <span className="text-[#82B440]">Feedback</span></h1>
            <div className="max-w-lg mx-auto py-10">
                <img className='w-20 h-20 rounded-full border-4 mx-auto' src={img} alt="" />
                <p className="text-[#666] text-center py-4">The food was absolutely delicious! The flavors were incredible, and the presentation was top-notch. Highly recommend!</p>
                <p className="text-center font-semibold text-[#666]">-Ema Waston</p>
            </div>
            
        </div>
    );
};

export default Feedback;