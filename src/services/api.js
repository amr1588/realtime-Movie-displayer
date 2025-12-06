import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3/trending/movie/week";
const API_KEY = "935e482610d610657d4ff0103df83a97";
const SearchURL = "https://api.themoviedb.org/3/search/movie"; 


export async function MoviesData() {
  try {
    let res = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
    return res.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
}


export async function SearchData(query) {
  if (!query || query.trim() === "") {
    return [];
  }
  try {
    let res = await axios.get(
      `${SearchURL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    return res.data.results;
  } catch (error) {
    console.error("Error fetching search data:", error);
    return [];
  }
}




