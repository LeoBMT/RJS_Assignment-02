import React from "react";
import Banner from "../../components/Components/HomePage/Banner";
import MovieList from "../../components/Components/HomePage/MovieList";
import Navbar from "../../components/Components/HomePage/Navbar";

function Browse() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <MovieList />
    </div>
  );
}

export default Browse;
