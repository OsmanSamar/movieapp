import React, { useState, useEffect } from "react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {
  arrayUnion,
  arrayRemove,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const Movie = ({ item }) => {
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

  const saveShow = async () => {
    if (user?.email) {
      setSaved(!saved);
      await updateDoc(doc(db, "users", `${user.email}`), {
        savedShows: saved ? arrayRemove(item.id) : arrayUnion(item),
      });
    } else {
      alert("Please log in to save a movie ");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
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
        <p onClick={saveShow}>
          {/* {like ? (
            <FaBookmark className="absolute top-4 left-4 text-red-600" />
          ) : (
            <FaRegBookmark className="absolute top-4 left-4 text-gray-300" />
          )} */}
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
