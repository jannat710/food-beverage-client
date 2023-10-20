import { NavLink } from "react-router-dom";
import {MdFastfood} from 'react-icons/md'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const Navbar = () => {
const {user,logout}=useContext(AuthContext);
console.log(user)

const handleLogout =()=>{
  logout()
  .then()
}


    const links = <>
            <li className="text-[#666]"><NavLink to="/">Home</NavLink></li>
            <li className="text-[#666]"><NavLink to="/addproduct">Add Product</NavLink></li>
            <li className="text-[#666]"><NavLink to="/mycart">My Cart</NavLink></li>
            <li className="text-[#666]"><NavLink to="/login">Login</NavLink></li>
            <li className="text-[#666]"><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <div className="flex justify-center items-center gap-2">
        <MdFastfood className="text-[#82B440]"></MdFastfood>
        <p className="text-[#666] text-lg">Foodies</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    
    <p>{user?.displayName}</p>
    <img className="rounded-full w-7" src={user?.photoURL} alt="" />
    {user && <button onClick={handleLogout} className="btn bg-[#82B440] text-white">Logout</button>}
    
  </div>
</div>
    );
};

export default Navbar;