import { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import { MoviesData, SearchData } from "../services/api";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchMovies(query) {
    let fetchedMovies = [];
    try {
      if (query.trim() === "") {
        fetchedMovies = await MoviesData();
      } else {
        fetchedMovies = await SearchData(query);
      }
      setMovies(fetchedMovies);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  }

  // Initial data fetch on mount
  useEffect(() => {
    
    fetchMovies(searchQuery);
  }, []);

  function handleSearchChange(event) {
    const query = event.target.value;
    setSearchQuery(query);

    fetchMovies(query);
  }

  return (
    <div className="homeSecsion w-100 bg-dark">
      <div className="search col-md-6 mx-auto text-center pt-5 mb-5">
        <input
          type="search"
          className="ps-2 p-2 col-6 me-2"
          placeholder="Search for movies..."
          value={searchQuery} 
          onChange={handleSearchChange} 
        />
        <button className="srchBtn p-2 px-3">Search</button>
      </div>
      <div>
        <Cards movies={movies} />
      </div>
    </div>
  );
}
