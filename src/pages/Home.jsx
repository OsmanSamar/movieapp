import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import reguests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
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
      <Row rowID="10" title="Cartoon TV" fetchURL={reguests.requestCartoonTV} />
    </div>
  );
};

export default Home;
