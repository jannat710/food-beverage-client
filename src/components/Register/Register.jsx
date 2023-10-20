import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2'



const Register = () => {
    const { signUp } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (text) => {
        setEmail(text.target.value);
        console.log(email)
    }
    const handlePassword = (text) => {
        setPassword(text.target.value);
        console.log(password)
    }

    const handleRegister = () => {
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

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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
                                <button onClick={handleRegister} className="btn bg-[#82B440]">Register</button>
                                

                                <button>Google Sign In</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;