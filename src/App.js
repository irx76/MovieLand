import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg"

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


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search); 
    } 


    useEffect (() => {
        searchMovies("Harry Potter");
    },[]);

    return(
        <div className="app">
            <h1>Hello World</h1>

            <div className="search">
                <input placeholder="Search for a movie" value="Superman"
                onChange={ ()=> {}}/>
                <img src={SearchIcon} alt="search icon" onClick={ ()=> {}}/>
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{Movie1.Year}</p>
                    </div>

                    <div>
                        <img src={Movie1.Poster =="N/A" ? "https://via.placeholder.com/400" : Movie1.Poster} alt={Movie1.Title}/>
                    </div>
                    <div>
                        <span>{Movie1.Type}</span>
                        <h3>{Movie1.Title}</h3>
                    </div>
                </div>

            </div>

        </div>
    )
}

// we have to export every component we create so that we can import them in other files
export default App; 
