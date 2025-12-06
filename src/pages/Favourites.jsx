import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useMovieContext } from '../Context/Context'
import Card from '../components/Card/Card';
import { Outlet } from 'react-router';


export default function Favourites() {

  const {favorites} = useMovieContext();
  const showNoFavorites = favorites.length > 0;

  return (
    <div className='bg-dark h-100'>
      {showNoFavorites ? (
        <div className="container-fluid h-100 py-3">
          <div className="d-flex flex-wrap gap-2">
            {favorites.map((fav) => {
              return (
                <Card
                  movie={fav}
                  title={fav.title}
                  img={fav.poster_path}
                  key={fav.id}
                  date={fav.release_date}
                  thisMovieId={fav.id}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="favoritePage dark w-100 vh-100">
          <div className="favoriteCard mx-md-auto w-50 mx-auto text-center py-md-5 py-4">
            <h2 className="text-danger fw-bold mb-4">No Favorite movies yet</h2>
            <p className="text-light fs-5 fw-light">
              start adding movies to your favorites and they will appear here
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
