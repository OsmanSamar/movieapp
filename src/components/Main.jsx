import React, { useEffect, useState } from "react";
import { FaPlayCircle, FaRegBookmark } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

const Main = () => {
  const [movie, setMovie] = useState(null);
  const [playActive, setPlayActive] = useState(false);
  const [watchLaterActive, setWatchLaterActive] = useState(false);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=498bcb5d34366e27ac11eaf2feaa537e&language=en-US&page=1"
        );
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setMovie(data.results[randomIndex]);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  const handlePlayClick = () => {
    setPlayActive(true);
    setTimeout(() => {
      setPlayActive(false);
    }, 2000); // 2 seconds
  };

  const handleWatchLaterClick = () => {
    setWatchLaterActive(true);
    setTimeout(() => {
      setWatchLaterActive(false);
    }, 2000); // 2 seconds
  };

  return (
    <div className="w-full h-[550px] text-white relative">
      {movie && (
        <>
          <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>
            <div className="my-4">
              <button
                className={`border bg-gray-300 text-black border-gray-300 py-2 px-5 ${
                  playActive ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handlePlayClick}
                disabled={playActive}
              >
                <span className="inline-block align-middle">Play</span>
                <FaPlayCircle
                  className="inline-block align-middle ml-1"
                  size={24}
                />
              </button>
              <button
                className={`border text-white border-gray-300 py-2 px-5 ml-4 ${
                  watchLaterActive ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleWatchLaterClick}
                disabled={watchLaterActive}
              >
                <span className="inline-block align-middle"> Watch Later</span>
                <MdWatchLater
                  className="inline-block align-middle ml-1 "
                  size={24}
                />
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released: {movie.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w[35%] text-gray-200 ">
              {movie.overview}
            </p>
          </div>
          <div className="absolute bottom-4 left-4">
            <FaRegBookmark className="text-gray-300" size={24} />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
