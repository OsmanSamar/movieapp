import React, { useEffect, useState } from "react";
import axios from "axios";
import reguests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(reguests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //console.log(movies);
  //The function’s purpose is to truncate a string (str) if it is longer than
  // a given number (num) and add three dots (...) at the end. The function uses the optional
  //chaining operator (?.) to check if the string is defined and has a length property.
  //If the string is undefined or null, the function will return undefined. Otherwise,
  //the function will compare the string’s length with the number. If the string is longer than the number,
  // the function will use the slice method to return a substring of the string from the beginning to the number,
  //and concatenate it with three dots. If the string is shorter than or equal to the number,
  //the function will return the string as it is. Here are some examples of how the function works:
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold ">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w[35%] text-gray-200 ">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
