import { data } from "autoprefixer";
import Swal from "sweetalert2";

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    console.log(image, name, brand, type, price, description, rating)

    const foodData = {
        image,
        name,
        brand,
        type,
        price,
        description,
        rating,
    }
    fetch('http://localhost:5000/foods',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(foodData),
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        if (data.deletedCount > 0) {
            Swal.fire(
                'Added!',
                'Food item added successfully.',
                'success'
            )}

    });

}

const AddProduct = () => {
    return (
        <div className="max-w-7xl mx-auto py-10 card font-display">
            <h1 className="text-4xl font-bold text-center">Add <span className="text-[#82B440]">Product</span></h1>


            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Image:</label>
                    <input className="input input-bordered" type="text" name="image" />
                </div>
                <div className="form-control">
                    <label>Name:</label>
                    <input className="input input-bordered" type="text" name="name" />
                </div>
                <div className="form-control">
                    <label>Brand Name:</label>
                    <input className="input input-bordered" type="text" name="brand" />
                </div>
                <div className="form-control">
                    <label>Type:</label>
                    <select name="type">
                        <option value="">Select a type</option>
                        <option value="drinks">Soft Drinks</option>
                        <option value="chocolate">Delicious Chocolate</option>
                        <option value="food">Fast Food</option>

                    </select>
                </div>
                <div className="form-control">
                    <label>Price:</label>
                    <input className="input input-bordered" type="text" name="price" />
                </div>
                <div className="form-control">
                    <label>Short Description:</label>
                    <input className="input input-bordered" type="text" name="description" />
                </div>
                <div className="form-control">
                    <label>Rating:</label>
                    <input className="input input-bordered" type="text" name="rating" />
                </div>
                <button className="btn bg-[#82B440] text-white" type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddProduct;