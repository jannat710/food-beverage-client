import error from '../../assets/error.jpg'

const Error = () => {
    return (
        <div className="max-w-7xl mx-auto text-center py-10">
            <h1 className='text-xl font-bold'>Oops !</h1>
            <p className='text-red-600'>Error 404 -Page Not Found</p>
            <p className='text-[#666]'>The page you requested could not be found <br />We are working on it .</p>
            <img className='h-1/2 w-1/2 mx-auto' src={error} alt="" />
        </div>
    );
};

export default Error;