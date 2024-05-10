import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(
      "Fetch all movies using TMDB api under usePopularMovies.js hook wuth useeffect[] "
    );
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
    console.log(
      "Using dispatch, Adding all movies from TMDB api into store addPopularMovies"
    );
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
