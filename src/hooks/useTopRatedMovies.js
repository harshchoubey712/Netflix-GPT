import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(
      "Fetch all movies using TMDB api under useTopRatedMovies.js hook wuth useeffect[] "
    );
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
    console.log(
      "Using dispatch, Adding all movies from TMDB api into store addTopRatedMovies"
    );
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
