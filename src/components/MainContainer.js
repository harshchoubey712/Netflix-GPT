import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  console.log(
    "Using useselector fetching the store details for movie nowPlayingMovies. Example: const movies =useSelector((store) => store.movies?.nowPlayingMovies"
  );
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];
  console.log(
    "From all movies fetched from store extract first movie using movies[0] "
  );
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  console.log(
    "From  movies[0] extract fields like title, id, overview,Syntax: const { original_title, overview, id } = mainMovie "
  );

  console.log(
    "Passing title and overview as props to VideoTitle component. Syntax:<VideoTitle title={original_title} overview={overview} />"
  );

  console.log(
    "Passing movieid to VideoBackground component Syntax: <VideoBackground movieId={id} />"
  );

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />

      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
