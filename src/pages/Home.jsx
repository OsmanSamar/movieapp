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
      <Row rowID="4" title="Trending" fetchURL={reguests.requestTrending} />
      <Row rowID="5" title="Horror" fetchURL={reguests.requestHorror} />
    </div>
  );
};

export default Home;
