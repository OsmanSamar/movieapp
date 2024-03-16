import React from "react";
import Row from "../components/Row";
import reguests from "../Requests";

export const Movies = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Movies</h1>
        </div>
      </div>
      <div className="pt-2 ">
        <Row rowID="1" title="Up Coming" fetchURL={reguests.requestUpcoming} />
        <Row rowID="2" title="Popular" fetchURL={reguests.requestPopular} />
        <Row rowID="3" title="Top Rated" fetchURL={reguests.requestTopRated} />
        <Row
          rowID="4"
          title="Trending Movies"
          fetchURL={reguests.requestTrending}
        />
        <Row
          rowID="5"
          title="Trending TV"
          fetchURL={reguests.requestTrendingTV}
        />
        <Row rowID="6" title="Horror" fetchURL={reguests.requestHorror} />
        <Row
          rowID="7"
          title="Kids Movies"
          fetchURL={reguests.requestKidsMovies}
        />
        <Row rowID="8" title="Kids TV" fetchURL={reguests.requestKidsTV} />
        <Row
          rowID="9"
          title="Cartoon Movies"
          fetchURL={reguests.requestCartoonMovies}
        />
        <Row
          rowID="10"
          title="Cartoon TV"
          fetchURL={reguests.requestCartoonTV}
        />
      </div>
    </>
  );
};
