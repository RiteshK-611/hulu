import React, { forwardRef } from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/solid";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="group">
      <div ref={ref}
        className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <Image
            className="rounded-lg"
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            alt="movie-poster"
            layout="fill"
            // height={1080} // require for responsive layout 268.5
            // width={1920} // require for responsive layout 477.34
            // onClick={() => console.log("clicked image")}
          />
          </div>
          <div className="flip-card-back">
            <h1>Overview:</h1> 
            <p>{result.overview}</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        {/* <p className="truncate max-w-md">{result.overview}</p> */}
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 uppercase">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_data} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>

    // <div
    //   ref={ref}
    //   className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    // >
    //   <Image
    //     className="rounded-lg"
    //     src={
    //       `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
    //       `${BASE_URL}${result.poster_path}`
    //     }
    //     alt="movie-poster"
    //     layout="responsive"
    //     height={1080}
    //     width={1920}
    //     onClick={() => console.log("clicked image")}
    //   />

    //   <div className="p-2">
    //     <p className="truncate max-w-md">{result.overview}</p>
    //     <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
    //       {result.title || result.original_name}
    //     </h2>
    //     <p className="flex items-center opacity-0 group-hover:opacity-100 uppercase">
    //       {result.media_type && `${result.media_type} •`}{" "}
    //       {result.release_date || result.first_air_data} •{" "}
    //       <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
    //     </p>
    //   </div>
    // </div>
  );
});

Thumbnail.displayName = "thumbnail";

export default Thumbnail;
