import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";



const Register = () => {
    const { signUp } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleName = (text) => {
        setName(text.target.value);
        console.log(name)
    }
    const handlePhoto = (text) => {
        setPhoto(text.target.value);
        console.log(photo)
    }
    const handleEmail = (text) => {
        setEmail(text.target.value);
        console.log(email)
    }
    const handlePassword = (text) => {
        setPassword(text.target.value);
        console.log(password)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (!/^(?!.*[A-Z])(?!.*[\W_]).{1,5}$/.test(password)
        ) {

            Swal.fire({
                icon: 'error',
                title: 'Registration failed!',
                text: 'Password must be less than 6 characters , do not have a capital letter , do not have a special character',
            })
            Swal.fire(
                'Registration failed!',
                'Password must be less than 6 characters , do not have a capital letter , do not have a special character!',
                'error'
            )

        }
        else {
            setError('');
            signUp(email, password)
            Swal.fire(
                'Good job!',
                'Registration Successful!',
                'success'
            )


        }
    };
    return (
        <div>
            {/* <Toaster></Toaster> */}

            <div className="hero min-h-screen bg-base-200  max-w-7xl mx-auto">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input onChange={(e) => handleName(e)} type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input onChange={(e) => handlePhoto(e)} type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={(e) => handleEmail(e)} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={(e) => handlePassword(e)} type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleRegister} className="btn bg-[#82B440] text-white">Register</button>



                            </div>

                        </form>
                        <p className="text-center mb-4">Already have an account please <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;