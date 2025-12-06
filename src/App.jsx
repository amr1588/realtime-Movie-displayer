import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Cards from './components/Cards/Cards';
import Card from './components/Card/Card';
import Favourites from './pages/Favourites';
import Movie from './pages/Movie.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MovieProvider } from './Context/Context.jsx';


function App() {
  let x = createBrowserRouter([
    {
      path:"" , element: <Register/>
    },
    {
      path:"login" , element: <Login/>
    },
    {path:"layout" , element: <Navbar/> , children: [
      {index: true , element: <Home/>},
      {path: "favorites" , element: <Favourites/>}
      ,{path: "movie/:id", element: <Movie/>}
    ]}
  ])

  return (
    <MovieProvider>
      <RouterProvider router={x}></RouterProvider>
    </MovieProvider>
  );
}

export default App
