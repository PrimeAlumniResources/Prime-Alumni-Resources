import { Link } from "react-router-dom";

function NavBar() {
  return (

    <div className="w-auto bg-slate-200 p-4 -mt-4 mb-6 text-2xl">
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
    </div> 
  );
}

export default NavBar;
