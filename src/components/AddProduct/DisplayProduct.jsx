import { useLoaderData } from "react-router-dom";


const DisplayProduct = () => {
    const foods =useLoaderData()
    console.log(foods)
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-[#82B440]">Products</h1>
        </div>
    );
};

export default DisplayProduct;