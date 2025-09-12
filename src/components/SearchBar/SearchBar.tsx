import { useState } from "react";
import styles from "./SearchBar.module.css";

interface Props {
  onSubmit: (searchQuery: string) => void;
}

function SearchBar({ onSubmit }: Props) {
  const [query, setQuery] = useState("");

  const handleSubmit = (formData:FormData) => {
    const search = formData.get("search") as string;
    console.log("search", search);
    onSubmit(query); 
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} action={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="search"
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