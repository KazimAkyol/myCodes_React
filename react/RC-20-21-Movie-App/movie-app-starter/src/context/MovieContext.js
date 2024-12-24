import React, { createContext } from 'react'
import axios from "axios"

//! context alanı create edelim:
export const FilmContext = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContext = (children) => {

    const getirMovies =()=>{
        axios.get(BASE_URL).then((res)=>console.log(res))
    }

  return (
    <FilmContext.Provider>
        {children}
    </FilmContext.Provider>
  )
}

export default MovieContext