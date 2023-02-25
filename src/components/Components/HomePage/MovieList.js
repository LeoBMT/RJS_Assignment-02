import { useState } from "react";
import Movie from "./Movie";
import MovieDetail from "./MovieDetail";
import classes from "./MovieList.module.css";

const MovieList = () => {
  const API_KEY = "e64d8c841a5c33f0c728a299182ef201";
  const [clickedMovie, setClickedMovie] = useState("");
  const [isClickMovie, setIsClickMovie] = useState(false);

  const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  };

  // Nhập tham số từ sự kiện click movie
  const onClickHandler = (movie, isClicked) => {
    setClickedMovie(movie);
    setIsClickMovie(isClicked);
  };

  return (
    <div className={classes.movielist}>
      <Movie
        path={requests.fetchNetflixOriginals}
        showType="poster"
        onClicked={onClickHandler}
      />
      <h3>Xu hướng</h3>
      <Movie path={requests.fetchTrending} onClicked={onClickHandler} />
      <h3>Xếp hạng cao</h3>
      <Movie path={requests.fetchTopRated} onClicked={onClickHandler} />
      <h3>Hành động</h3>
      <Movie path={requests.fetchActionMovies} onClicked={onClickHandler} />
      <h3>Hài</h3>
      <Movie path={requests.fetchComedyMovies} onClicked={onClickHandler} />
      <h3>Kinh dị</h3>
      <Movie path={requests.fetchHorrorMovies} onClicked={onClickHandler} />
      <h3>Lãng mạn</h3>
      <Movie path={requests.fetchRomanceMovies} onClicked={onClickHandler} />
      <h3>Tài liệu</h3>
      <Movie path={requests.fetchDocumentaries} onClicked={onClickHandler} />

      {
        // Kiểm tra trạng thái hiển thị movie detail
        isClickMovie ? <MovieDetail movie={clickedMovie} /> : ""
      }
    </div>
  );
};

export default MovieList;
