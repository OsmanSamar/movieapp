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
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default reguests;