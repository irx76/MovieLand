import React from "react";
import { useEffect } from "react";


const API_KEY= "d3fd6995";

const API_URL=`http://www.omdbapi.com/?apikey=${API_KEY}`

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
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

// we have to export every component we create so that we can import them in other files
export default App; 
