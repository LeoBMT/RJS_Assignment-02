import { useState, useEffect } from "react";

import useHttp from "../../hooks/use-http";
import { useHorizontalScroll } from "../../hooks/use-scroll";
import classes from "./Movie.module.css";

const Movie = (props) => {
  const [data, setData] = useState([]);
  const [clickedMovie, setClickedMovie] = useState("");
  const [isClickMovie, setIsClickMovie] = useState(false);

  // Lấy dữ liệu API
  const { error, sendRequest: fetchMovie } = useHttp();
  useEffect(() => {
    const getMovie = (data) => {
      setData(data.results);
    };
    fetchMovie({ url: props.path }, getMovie);
  }, []);
  // Sự kiện khi click vào movie
  const onClickMovieHandler = (event) => {
    const index = data.findIndex((e) => e.id === +event.target.id);
    if (+event.target.id === clickedMovie.id && isClickMovie) {
      props.onClicked("", false);
      setIsClickMovie(false);
    } else {
      window.scroll(0, event.pageY - 300);
      props.onClicked(data[index], true);
      setClickedMovie(data[index]);
      setIsClickMovie(true);
    }
  };

  // Cuộn ngang khi lăn chuột
  const scrollRef = useHorizontalScroll();

  return (
    <div className={classes.movie} ref={scrollRef}>
      {data.map((movie) => (
        <img
          onClick={onClickMovieHandler}
          key={movie.id}
          id={movie.id}
          src={`${
            props.showType === "poster"
              ? movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : ""
              : movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : ""
          }`}
          alt=""
          className={
            props.showType === "poster"
              ? classes.imgposter
              : classes.imgbackdrop
          }
        ></img>
      ))}
    </div>
  );
};

export default Movie;
