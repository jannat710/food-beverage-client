import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import img from '../../assets/register.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
            });
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photo, password)


        // Password validation
        if (password.length > 6) {
            Swal.fire('Error', 'Password is less than 6 characters', 'error');
            return;
        }

        if (/[A-Z]/.test(password)) {
            Swal.fire('Error', 'Password does not have a capital letter', 'error');
            return;
        }

        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            Swal.fire('Error', 'Password does not have any special character', 'error');
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire('Success', 'User created successfully!', 'success');
                console.log(user)
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="py-10">
            <div className="hero bg-base-200 min-h-min py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full mx-auto lg:w-1/3 md:w-1/2">
                        <img className="" src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-0 md:mr-0 lg:mr-16">
                        <form onSubmit={handleRegister} className="card-body">
                            <h1 className="text-3xl text-center font-bold"><span className="text-[#82B440]">Register</span> now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                                <button onClick={handleGoogleSignIn}>Google Sign In</button>
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account ? Please <Link className='text-red-500 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;