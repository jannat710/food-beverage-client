import { useLoaderData } from "react-router-dom";


const DisplayProduct = () => {
    const foods =useLoaderData()
    console.log(foods)
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-[#82B440]">Products</h1>
        </div>
    );
};

export default DisplayProduct;