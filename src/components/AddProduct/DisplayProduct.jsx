import { useLoaderData } from "react-router-dom";


const DisplayProduct = () => {
    const foods = useLoaderData()
    console.log(foods)
    const { name } = foods;
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center text-[#82B440] py-10">Products</h1>
            {
                foods.map((food) => (<div key={(foods._id)}>
                    <div className=" max-w-7xl mx-auto">
                    <div className="card w-full mx-auto bg-transparent border shadow-xl font-display">
                        <figure><img className="h-36 w-36" src={food.image} alt="car!" /></figure>
                        <div className="card-body flex items-center justify-center font-display">
                            <p className="card-title">Name: {food.name}</p>
                            <p className="">Brand: {food.brand}</p>
                            <p className="">Type: {food.type}</p>
                            <p className="">Price: {food.price}</p>
                            <p className="">Description: {food.description}</p>
                            <p className="">Rating: {food.rating}</p>
                            <button className="btn bg-[#82B440] text-white normal-case">Details</button>
                            <button className="btn bg-[#82B440] text-white normal-case">Update</button>
                        </div>
                    </div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default DisplayProduct;