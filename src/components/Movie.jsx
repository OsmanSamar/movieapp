import React, { useState, useEffect } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
//import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import {
  arrayUnion,
  arrayRemove,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const Movie = ({ item }) => {
  const navigate = useNavigate();

  // const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  // const movieID = doc(db, "users", `${user?.email}`);
  // const saveShow = async () => {
  //   if (user?.email) {
  //     setLike(!like);
  //     setSaved(!saved);
  //     await updateDoc(movieID, {
  //       savedShows: arrayUnion({
  //         id: item.id,
  //         title: item.title,
  //         img: item.backdrop_path,
  //       }),
  //     });
  //   } else {
  //     alert("Please log in to save a movie ");
  //   }
  // };

  useEffect(() => {
    const fetchSavedShows = async () => {
      if (user?.email) {
        const docRef = doc(db, "users", `${user.email}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const savedShows = docSnap.data().savedShows || [];
          const isSaved = savedShows.some((show) => show.id === item.id);
          setSaved(isSaved);
        }
      }
    };

    fetchSavedShows();
  }, [user, item]);
  const websiteName = "MovieApp";

  const saveShow = async () => {
    if (user?.email) {
      setSaved(!saved);
      await updateDoc(doc(db, "users", `${user.email}`), {
        savedShows: saved ? arrayRemove(item.id) : arrayUnion(item),
      });
    } else {
      //alert("Please log in to save a movie ");
      const shouldSave = window.confirm(
        // "Please log in to save a movie  . Do you want to sign in?"
        `Please log in to save a movie on ${websiteName}. Do you want to sign in?`
      );

      if (shouldSave) {
        navigate("/login");
      }
    }
  };

  // Define a function to map genre IDs to categories
  const mapGenreToCategory = (genreIds) => {
    // Define mappings for genre IDs to categories
    const categoryMappings = {
      28: "Film", // Action
      12: "Film", // Adventure
      16: "Cartoon", // Animation
      35: "Film", // Comedy
      80: "TV", // Crime
      99: "Film", // Documentary
      18: "Film", // Drama
      10751: "Kids", // Family
      14: "Film", // Fantasy
      36: "Film", // History
      27: "Film", // Horror
      10402: "Film", // Music
      9648: "Film", // Mystery
      10749: "Film", // Romance
      878: "Film", // Science Fiction
      10770: "TV", // TV Movie
      53: "Film", // Thriller
      10752: "Film", // War
      37: "Film", // Western
    };

    // Map each genre ID to its corresponding category
    const categories = genreIds.map((genreId) => categoryMappings[genreId]);

    // Return unique categories
    return [...new Set(categories)];
  };

  // Extract genres from item
  const genres = item?.genre_ids || [];

  // Get categories for the movie or show
  const categories = mapGenreToCategory(genres);

  // const genres = item?.genre_ids.map((genreId) => categoryMappings[genreId]);

  return (
    <div
      // Link to={`/MovieDetails/${item.id}`}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
        className="w-full h-auto block"
      />

      <div
        className="absolute top-0 left-0 w-full h-full hover:bg-black/80
              opacity-0 hover:opacity-100 text-white"
      >
        <p
          className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center
                h-full text-center"
        >
          {item?.title}
        </p>
        {/* Display categories on the image */}
        <div className="absolute top-0 right-0">
          {categories.map((category) => (
            <span
              key={category}
              className="bg-black text-white text-xs px-1 py-0.5 m-1 rounded-md absolute"
              style={{ top: "5px", right: "2px" }} // Adjust position as needed
            >
              {category}
            </span>
          ))}
        </div>
        {/* Display bookmark icon */}
        <p onClick={saveShow}>
          {saved ? (
            <FaBookmark className="absolute top-4 left-4 text-red-600" />
          ) : (
            <FaRegBookmark className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
