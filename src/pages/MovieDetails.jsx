import React from "react";

const MovieDetailsPage = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

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
        <h1>{movie.title}</h1>
        <img src={posterUrl} alt={movie.title} />
        <p>{movie.overview}</p>
        {movie.video && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.video}`}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
