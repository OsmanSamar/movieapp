const key = "498bcb5d34366e27ac11eaf2feaa537e";

//const reguests = {
//requestPopular:
//"https://api.themoviedb.org/3/movie/popular?api_key=498bcb5d34366e27ac11eaf2feaa537e",
//requestTopRated:
//"https://api.themoviedb.org/3/movie/top_rated?api_key=498bcb5d34366e27ac11eaf2feaa537e",
//requestTrending:
//"https://api.themoviedb.org/3/trending/movie/day?api_key=498bcb5d34366e27ac11eaf2feaa537e",
//requestHorror:
//"https://api.themoviedb.org/3/discover/movie?api_key=498bcb5d34366e27ac11eaf2feaa537e&with_genres=27",
//requestUpcoming:
//"https://api.themoviedb.org/3/movie/upcoming?api_key=498bcb5d34366e27ac11eaf2feaa537e",
//};

const reguests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestTrendingTV: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}&language=en-US&page=1`, // Fetch trending TV series
  requestPopularTV: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`, // Fetch popular TV series
  requestUpcomingTV: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`, // Fetch upcoming TV series
  requestTopRatedTV: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`, // Fetch top-rated TV series
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestKidsMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1`, // Fetch movies suitable for children
  requestKidsTV: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1`, // Fetch TV series suitable for children
  requestCartoonMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=16&page=1`, // Fetch cartoon movies (Animation genre ID: 16)
  requestCartoonTV: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&with_genres=16&page=1`, // Fetch cartoon TV series (Animation genre ID: 16)
};

export default reguests;
