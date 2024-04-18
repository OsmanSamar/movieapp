<div className="w-full">
  {/* Navbar for LG and MD screens */}
  {/* <div className="hidden lg:flex md:flex items-center justify-between p-4 z-[100] w-full"> */}
    {/* Sidebar content */}
    {/* <div className="w-48 bg-gray-900 h-screen text-white">
      <div className="p-4">
        <Link to="/">
          <h1 className="text-red-600 text-lg md:text-4xl font-bold cursor-pointer">
            MovieApp
          </h1>
        </Link>
      </div>
      <div className="p-4">
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
    </div> */}
    {/* End of Sidebar */}
    {/* <div className="flex items-center">
      {user?.email ? (
        <button
          onClick={handleLogout}
          className="bg-red-600 px-1 py-1 rounded cursor-pointer text-white md:px-6 md:py-2"
        >
          Logout
        </button>
      ) : (
        <>
          <Link to="/login">
            <button className="text-white text-sm px-1 py-1 pr-4 md:px-6 md:py-2">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-1 py-1 text-sm rounded cursor-pointer text-white md:px-6 md:py-2">
              Sign Up
            </button>
          </Link>
        </>
      )}
    </div>
  </div> */}
  {/* End of Navbar for LG and MD screens */}

  {/* Navbar for SM screens */}
  {/* <div className="lg:hidden md:hidden items-center justify-between p-4 z-[100] w-full bg-gray-900 text-white">
    <Link to="/">
      <h1 className="text-red-600 text-lg md:text-4xl font-bold cursor-pointer">
        MovieApp
      </h1>
    </Link>
    <div>
      {user?.email ? (
        <button
          onClick={handleLogout}
          className="bg-red-600 px-1 py-1 rounded cursor-pointer text-white md:px-6 md:py-2"
        >
          Logout
        </button>
      ) : (
        <>
          <Link to="/login">
            <button className="text-white text-sm px-1 py-1 pr-4 md:px-6 md:py-2">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-1 py-1 text-sm rounded cursor-pointer text-white md:px-6 md:py-2">
              Sign Up
            </button>
          </Link>
        </>
      )}
    </div>
  </div> */}
  {/* End of Navbar for SM screens */}
{/* </div>; */}
