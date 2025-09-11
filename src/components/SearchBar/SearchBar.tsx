import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface Props {
  onSubmit: (searchQuery: string) => void;
}

function SearchBar({ onSubmit }: Props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(query); 
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <Toaster />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;