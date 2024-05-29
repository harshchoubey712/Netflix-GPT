import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowplayingMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(
      "Fetch all movies using TMDB api under useNowplayingMovies.js hook wuth useeffect[] "
    );
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
    console.log(
      "Using dispatch, Adding all movies from TMDB api into store addNowPlayingMovies"
    );
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowplayingMovies;
