import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useParams } from "react-router-dom";
import MovieCard from "./MovieCard.js";

const Movie = (props) => {
    console.log(props);
    const [movie, setMovie] = useState();
    // console.log(props);
    const { id } = useParams();

    useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
            setMovie(response.data);
        })
        .catch(error => {
            console.error(error);
        });

},[id]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(<NavLink to={`/${id}`} key={movie.id} activeClassName="activeNavButton">{movie.title}</NavLink>);
    // addToSavedList(movie);
    props.history.push("/");
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  
  return (
    
      <div className="save-wrapper">
        <MovieCard movie={movie} {...props} />
        <div className="save-button" onClick={saveMovie}>Save</div>
      </div>
  );
}

export default Movie;