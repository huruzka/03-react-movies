import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieHttpResponse {
  results: Movie[];
}

const myKey = import.meta.env.VITE_MY_API;

export const fetchMovies = async (title: string): Promise<Movie[]> => {
  
    const response = await axios.get<MovieHttpResponse>(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${myKey}`,
        },
      }
    );
    return response.data.results;
  } 

