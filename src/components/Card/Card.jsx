import { useEffect, useState } from "react";
import "./Card.css";
import { useMovieContext } from "../../Context/Context";
import { Link } from "react-router";
export default function Card({ movie, title, img, date, thisMovieId }) {
  let [toastMessage, setToastMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(thisMovieId);
  function handleClick() {
    if (!favorite) {
      addToFavorites(movie);
      setToastMessage("added");
      console.log("added");
    } else {
      removeFromFavorites(thisMovieId);
      setToastMessage("removed");
      console.log("removed");
    }

    setTimeout(() => {
      setToastMessage(null);
    }, 1000);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const cardClasses = `card box-size mb-3 ${isLoading ? "card-loading" : ""}`;


  return (
    <>
      <div className={cardClasses}>
        <div className="position-relative card-upper" >
          <div className="toast-notification">{toastMessage}</div>
          <Link to={`/layout/movie/${thisMovieId}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${img}`}
            className="card-img-top w-100"
          />
          <div className="image-gradient-overlay"></div>
          </Link>
          <i
            className={`bi bi-heart-fill heartLayer ${
              favorite ? "text-danger" : ""
            }`}
            onClick={() => handleClick()}
          ></i>
        </div>

        <div className="card-body">
          <h5 className="card-title text-white">{title}</h5>
          <span className="text-warning">{date.split("-")[0]}</span>
        </div>
      </div>
    </>
  );
}
