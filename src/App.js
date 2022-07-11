import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import MovieList from "./Components/MovieComponents/MovieList";
import { moviesData } from "./Sources/MovieData";
import { Routes, Route } from "react-router";
import MoveDetailes from "./Components/MovieComponents/MoveDetailes";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filterName, setFilterName] = useState("");
  const [filterRate, setFilterRate] = useState(1);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar
                filterName={filterName}
                filterRate={filterRate}
                setFilterName={setFilterName}
                setFilterRate={setFilterRate}
                moviesData={movies}
                moviesfun={setMovies}
              />
              <div className="movielist">
                <MovieList
                  moviesData={movies}
                  filterName={filterName}
                  filterRate={filterRate}
                />
              </div>
            </>
          }
        />
        <Route path="movie/:id" element={<MoveDetailes />} />
        <Route path="*" element={<h2>Error to find page ! </h2>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
