import React from "react";
import { useState,useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";

const API_KEY= "d3fd6995";

const API_URL=`http://www.omdbapi.com/?apikey=${API_KEY}`

const Movie1={
    "Title": "Harry Potter and the Goblet of Fire",
    "Year": "2005",
    "imdbID": "tt0330373",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
}

const App = () => {
    const [movies,setMovies] = useState([])
    const [searchTerm,setSearchTerm] = useState("")  

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search); 
    } 


    useEffect (() => {
        searchMovies("Harry Potter");
    },[]);

    return(
        <div className="app">
            <h1>Hello World</h1>

            <div className="search">
                <input placeholder="Search for a movie" value={searchTerm}
                onChange={ (e)=> setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search icon" onClick={ ()=> searchMovies(searchTerm)}/>
            </div>

            {
                //this is a dynamic block of code

                movies.length >0 
                ?(<div className="container">
                    {movies.map((movie) => (
                        <MovieCard Movie1={movie}/>
                    ))} //this is a dynamic block of code

                </div>
                )
                : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

            

        </div>
    )
}

// we have to export every component we create so that we can import them in other files
export default App; 
