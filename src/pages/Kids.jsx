import React from "react";
import Row from "../components/Row";
import reguests from "../Requests";

const Kids = () => {
  return (
    <>
      <>
        <div className="w-full text-white">
          <img
            className="w-full h-[400px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            //src="https://source.unsplash.com/800x600/?tv-show"
            //   src="/ywbacot78IuNhGW4uVZPxxxVTkm.jpg"
            alt="/"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">Kids Shows</h1>
          </div>
        </div>
        <div></div>
        <Row
          rowID="1"
          title=" Cartoon TV"
          fetchURL={reguests.requestCartoonTV}
        />
        <Row
          rowID="2"
          title="Cartoon Movies"
          fetchURL={reguests.requestCartoonMovies}
        />
        <Row rowID="3" title="Kids TV" fetchURL={reguests.requestKidsTV} />

        <Row
          rowID="4"
          title="Kids Movies"
          fetchURL={reguests.requestKidsMovies}
        />
      </>
    </>
  );
};

export default Kids;
