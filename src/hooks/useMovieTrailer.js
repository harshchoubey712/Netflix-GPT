import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

// fetch trailer video and updating the store with trailer
//video data

const useMovieTrailer = (movieId) => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    console.log(
      "Using fetch call call movie trailer api with {movieId} . Syntax: const data = await fetch('https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,"
    );

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(
      "Printing data of all videos from 1st movie movie[0]. Syntax:const json = await data.json();"
    );
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    console.log(
      "Printing trailer video using filter. Syntax:const filterData = json.results.filter((video) => video.type === 'Trailer'); const trailer = filterData.length ? filterData[0] : json.results[0];"
    );

    console.log(trailer);
    //  setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));

    console.log(
      " add the trailer video to the store: Syntax: dispatch(addTrailerVideo(trailer))"
    );
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
