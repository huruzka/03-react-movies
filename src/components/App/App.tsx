
import SearchBar from '../SearchBar/SearchBar'
import './App. module.css'
import MovieGrid from '../Movie Grid/MovieGrid';
import type { Movie } from '../../types/movie';
import { useState } from "react";
import { fetchMovies } from '../../servicies/movieService';
import Loader from '../Loader/Loader';
import ErrorMessage from '../Error Message/ErrorMessage';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleSelectMovie = (movie: Movie) => {
    console.log("Вибраний фільм:", movie); // тепер використовується
  };

  const handleSearch = async (searchQuery: string) => {
    try {
      setLoader(true)
      const results = await fetchMovies(searchQuery); // searchQuery тепер визначений
      setMovies(results);
    } catch { 
      setError(true);
    } finally {
      setLoader(false)
    }
  };

  return (
    <div>
      {isLoader && <Loader />}
      {error&&<ErrorMessage /> }
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} onSelect={handleSelectMovie} />
    </div>
  );
}

export default App;