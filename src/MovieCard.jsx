import React from "react";

const MovieCard = ({Movie1}) => {
    return (
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
    )
}

export default MovieCard;
