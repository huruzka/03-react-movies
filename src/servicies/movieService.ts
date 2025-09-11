
import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieHttpResponse {
  results: Movie[];
}

const myKey = import.meta.env.VITE_MY_API;


// HTTP-функція запиту фільмів
export const fetchMovies = async (title: string): Promise<Movie[]> => {
  try {
  const response = await axios.get<MovieHttpResponse>(
  `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&api_key=${myKey}`
);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};