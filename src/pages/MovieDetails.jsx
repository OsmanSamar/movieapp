import React from "react";

const MovieDetails = ({ item }) => {
  // Check if movie data is available
  if (!item) {
    return <div>No movie details available.</div>;
  }
  const posterUrl = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;

  return (
    <div>
      {/* <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p> */}

      {/* <video controls>
        <source src={movie.videoUrl} type="video/mp4" />
      </video> */}
      <div>
        <h1>{item.title}</h1>
        <img src={posterUrl} alt={item.title} />
        <p>{item.overview}</p>
        {item.video ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${item.video}`}
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div>No video available for this movie.</div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
