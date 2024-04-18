import React, { useState, useEffect } from "react";
//import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = ({ item }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  // const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  // const handleClick = () => {
  //   setShowDetails(!showDetails);
  // };

  return (
    // <div className="movie-card" onClick={handleClick}>
    //   <img src={item.poster_path} alt={item.title} />
    //   <h3>{item.title}</h3>
    //   {showDetails && <Movie item={item} />}
    // </div>
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
