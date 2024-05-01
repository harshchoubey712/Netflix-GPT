import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  console.log(
    "In VideoBackground Component accept movieId props. Syntax:const VideoBackground = ({ movieId })."
  );
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  console.log(
    "From Useselector fetch details of trailerVideo from store. Syntax: const trailerVideo = useSelector((store) => store.movies?.trailerVideo)"
  );

  //  const [trailerId, setTrailerId] = useState(null);

  // fetch trailer video and updating the store with trailer
  //video data

  console.log(
    "Update the store with trailer video data using hook useMovieTrailer. Syntax: useMovieTrailer(movieId)"
  );

  console.log(
    "From the main movie[0] fetched we passed movieid and then call syntax: useMovieTrailer(movieId) "
  );

  useMovieTrailer(movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
