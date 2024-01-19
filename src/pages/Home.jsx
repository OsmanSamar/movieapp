import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import reguests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Up Coming" fetchURL={reguests.requestUpcoming} />
      <Row title="Popular" fetchURL={reguests.requestPopular} />
      <Row title="Top Rated" fetchURL={reguests.requestTopRated} />
      <Row title="Trending" fetchURL={reguests.requestTrending} />
      <Row title="Horror" fetchURL={reguests.requestHorror} />
    </div>
  );
};

export default Home;
