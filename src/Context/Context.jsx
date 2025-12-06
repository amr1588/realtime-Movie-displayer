import { useEffect, useState } from "react";
import { Children, useContext } from "react";
import { createContext } from "react";


const MovieContext = createContext();

export const useMovieContext = () => {
   return useContext(MovieContext);
}

export const MovieProvider = ({ children }) => {
  let [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movieId !== movie.id));
  };


  // .......................................another delete function method.........................................

  // const removeFromFavorites = (movieId) => {
  // // 1. Get the current state value (Note: You must use the functional update
  // //    if you want to ensure you get the absolute latest state value
  // //    without relying on the 'favorites' variable being correct).

  // setFavorites(prevFavorites => {
  //     // 2. MODIFY THE COPY: Create a NEW array using the filter method.
  //     // This array contains all elements EXCEPT the one that matches the ID.
  //     const updatedFavorites = prevFavorites.filter((movie) => {
  //         return movieId !== movie.id;
  //     });

  //     // 3. SET STATE: Update the state with the newly created (and modified) array copy.
  //     return updatedFavorites;
  // });

  // ................................................................................................................

  const isFavorite = (movieId) => {
    const movieCheck = favorites.some((favorite) => favorite.id == movieId)
    return movieCheck;
  }

  const values = {
    favorites,
    addToFavorites, 
    removeFromFavorites,
    isFavorite
  }

  return <MovieContext.Provider value={values}>{children}</MovieContext.Provider>;
};