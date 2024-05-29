import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addupcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getupcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(
      "Fetch all movies using TMDB api under useupcomingMovies.js hook wuth useeffect[] "
    );
    console.log(json.results);
    dispatch(addupcomingMovies(json.results));
    console.log(
      "Using dispatch, Adding all movies from TMDB api into store addupcomingMovies"
    );
  };

  useEffect(() => {
    !upcomingMovies && getupcomingMovies();
  }, []);
};

export default useUpcomingMovies;
