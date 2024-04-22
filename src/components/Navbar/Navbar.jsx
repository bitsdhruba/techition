import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { loggedin, setLoggedin } = useContext(AppContext);
  const handleSignout = () => {
    setLoggedin(false);
    toast.error("Signed out!");
  };

  return (
    <div className="max-w-full bg-[#1D3557]">
      <div className="flex justify-between items-center max-w-[1200px] h-16 mx-auto">
        <div className="mx-3">
          <Link to="/">
            <h1 className="text-2xl text-white">Techition</h1>
          </Link>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex gap-x-6 text-white ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About</li>
            <li>Support</li>
          </ul>
        </nav>

        {loggedin ? (
          <div className="flex items-center gap-x-4 text-richblack-900 mx-3">
            <Link to="/dashboard">
              <button className="  text-white p-2 rounded-[8px] border border-richblue-700">
                Dashboard
              </button>
            </Link>
            <Link to="/signin">
              <button
                className=" text-white bg-[#E63946] p-2 rounded-[8px] border border-richblue-700"
                onClick={handleSignout}
              >
                Sign out
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-x-4 text-richblack-900 mx-3">
            <Link to="/signin">
              <button className="  text-white p-2 rounded-[8px] border border-richblue-700">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className=" text-white bg-[#E63946] p-2 rounded-[8px] border border-richblue-700">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
