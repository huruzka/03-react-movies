import SearchBar from '../SearchBar/SearchBar';
import './App.module.css';
import MovieGrid from '../Movie Grid/MovieGrid';
import type { Movie } from '../../types/movie';
import { useState } from "react";
import { fetchMovies } from '../../services/movieService';
import Loader from '../Loader/Loader';
import ErrorMessage from '../Error Message/ErrorMessage';
import MovieModal from '../Movie Modal/MovieModal';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleSearch = async (searchQuery: string) => {
    try {
      setError(false);
      setLoader(true);
      const results = await fetchMovies(searchQuery);
      setMovies(results);
    } catch { 
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      {isLoader && <Loader />}
      {error && <ErrorMessage />}
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} onSelect={handleSelectMovie} />
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;
