

const Brands = ({ brands }) => {
    const { brand_name, image } = brands;
    return (
        <div className="card w-full mx-auto bg-transparent border shadow-xl font-display">
            <figure><img className="h-36 w-36" src={image} alt="car!" /></figure>
            <div className="card-body flex items-center justify-center">
                <h2 className="card-title">{brand_name}</h2>
            </div>
        </div>
    );
};

export default Brands;