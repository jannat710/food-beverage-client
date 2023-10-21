import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {
    const {googleSignIn,signIn}=useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();


    const handleEmail = (text) => {
        setEmail(text.target.value);
        console.log(email)
    }
    const handlePassword = (text) => {
        setPassword(text.target.value);
        console.log(password)
    }

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then((result)=>{
            console.log(result.user);
        });
    }

    const handleLogin =(e)=>{
        e.preventDefault();
        if((email,password)){
            console.log("ok")
            signIn(email,password)
            .then(result=>{
                console.log(result.user);
                Navigate(location?.state ? location.state : '/');
            })
            .catch((err)=>{
                Swal.fire(
                    'Oops!',
                    'Invalid Login!',
                    'error'
                  )
            })
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
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
          <button onClick={handleLogin} className="btn text-white bg-[#82B440]">Login</button>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>

      </form>
      <p className="text-center mb-4">Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;