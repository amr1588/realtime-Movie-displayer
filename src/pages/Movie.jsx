import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Movie() {
  
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const API_KEY = "935e482610d610657d4ff0103df83a97";

  
  useEffect(() => {
    async function getMovieDetails() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setMovieDetails(res.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    getMovieDetails();
  }, [id]);

  if (!movieDetails)
    return <div className="text-center mt-5 w-25 mx-auto rounded-5 bg-dark">
    
        <div className="w-100 text-white p-2 fs-4">
            Loading...
        </div>

    </div>;

  return (
    <div className="bg-dark vh-100">
      <div className="container text-white pt-5 ">
        <div className="row">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              className="img-fluid rounded"
              alt={movieDetails.title}
            />
          </div>
          <div className="col-md-6">
            <h1 className="fw-bold">{movieDetails.title}</h1>
            <p className="text-warning fs-4">
              Rating: {movieDetails.vote_average}
            </p>
            <p>{movieDetails.overview}</p>
            <p>
              <strong>Release Date:</strong> {movieDetails.release_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
