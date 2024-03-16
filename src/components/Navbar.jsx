import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  //
  const { user, logOut } = UserAuth();
  // console.log(user.email);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="flex item-center justify-between p-4 z-[100] w-full absolute">
    //   <Link to="/">
    //     <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
    //       MovieApp
    //     </h1>
    //   </Link>
    //   {user?.email ? (
    //     <div>
    //       <Link to="/account">
    //         <button className="text-white pr-4">Account</button>
    //       </Link>

    //       <button
    //         onClick={handleLogout}
    //         className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   ) : (
    //     <div>
    //       <Link to="/login">
    //         <button className="text-white pr-4">Sign In</button>
    //       </Link>
    //       <Link to="/signup">
    //         <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
    //           Sign Up
    //         </button>
    //       </Link>
    //     </div>
    //   )}
    // </div>

    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-lg md:text-4xl  font-bold cursor-pointer">
          MovieApp
        </h1>
      </Link>
      <div className="flex items-center">
        <Link to="/movies">
          <button className="text-white pr-4">
            <MdLocalMovies />
          </button>
        </Link>
        <Link to="/tv">
          <button className="text-white pr-4">
            <PiTelevision />
          </button>
        </Link>
        <Link to="/kids">
          <button className="text-white pr-4">
            <TbBrandYoutubeKids />
          </button>
        </Link>
        {user?.email && (
          <Link to="/account">
            <button className="text-white pr-4">
              {user?.bookmarks ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </Link>
        )}
      </div>
      <div>
        {user?.email ? (
          <>
            {/* <Link to="/account">
              <button className="text-white pr-4">Account</button>
            </Link> */}
            <button
              onClick={handleLogout}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="text-white pr-4">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
