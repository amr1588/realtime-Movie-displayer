import React, { useState } from "react";
import Card from "../Card/Card";

export default function cards({ movies }) {
  console.log(movies);

  return (
    <>
      <div className="container-fluid">
        <div className="d-md-flex d-flex flex-wrap gap-md-2 gap-3">
          {movies.map((movie) => {
            return (
              <Card
                movie={movie}
                title={movie.title}
                img={movie.poster_path}
                key={movie.id}
                date={movie.release_date}
                thisMovieId={movie.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
