

import SearchBar from '../SearchBar/SearchBar'
import './App. module.css'
import MovieGrid from '../Movie Grid/MovieGrid';
import type { Movie } from '../../types/movie';
import { useState } from "react";
import { fetchMovies } from '../../servicies/movieService';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSelectMovie = (movie: Movie) => {
    console.log("Вибраний фільм:", movie); // тепер використовується
  };

  const handleSearch = async (searchQuery: string) => {
    const results = await fetchMovies(searchQuery); // searchQuery тепер визначений
    setMovies(results);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} onSelect={handleSelectMovie} />
    </div>
  );
}

export default App;