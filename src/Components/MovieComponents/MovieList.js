import React from "react";
// import MoveDetailes from "./MoveDetailes";
import MovieCrd from "./MovieCrd";

function MovieList(props) {
  console.log(props.moviesData);
  return (
    <div className="moviediv">
      {" "}
      {props.moviesData
        .filter((e) =>
          e.name.toUpperCase().includes(props.filterName.toUpperCase())
        )
        .filter((e) => e.rating >= props.filterRate)
        .map((e) => (
          <MovieCrd e={e} key={e.id} />
          // <MoveDetailes e={e} key={e.id} />
        ))}
    </div>
  );
}

export default MovieList;
