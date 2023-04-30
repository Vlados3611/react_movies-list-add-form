import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';

import { Movie } from './types/Movie';

export const App: React.FC = () => {
  const [filterMovies, setFilterMovies] = useState(moviesFromServer);

  const addMovieToList = (movie: Movie) => {
    setFilterMovies(prevState => [
      ...prevState,
      movie,
    ]);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={filterMovies} />
      </div>
      <div className="sidebar">
        <NewMovie onAdd={addMovieToList} />
      </div>
    </div>
  );
};
