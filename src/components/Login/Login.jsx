import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import img from '../../assets/login.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signIn(email, password)
      .then(result => {
        const user = result.user;
        Swal.fire('Success', 'User loged in successfully!', 'success');
        console.log(user);
        Navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        Swal.fire('Error', 'Invalid!', 'error');
      });

  }
  return (
    <div className="py-10">
      <div className="hero min-h-min bg-base-200 py-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-full mx-auto lg:w-1/3 md:w-1/2">
            <img className="" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-0 md:mr-0 lg:mr-16">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl text-center font-bold"><span className="text-[#82B440]">Login</span> now!</h1>
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
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='my-4 text-center'>New to here? Please <Link className='text-red-500 font-bold' to="/register">Register</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;