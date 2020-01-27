import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard.js";


const MovieList = props => {
    console.log(props);
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get(`http://localhost:5000/api/movies/`)
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        // below taken out and refactored into MovieCard
        // <MovieDetails key={movie.id} movie={movie} />
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}


// refactored to MovieCard.js
// function MovieDetails({ movie }) {
//     console.log(movie);
//   const { title, director, metascore, stars, id } = movie;
//   return (
//     <Link to={`/movies/${id}`}>
//         <div className="movie-card">
//         <h2>{title}</h2>
//         <div className="movie-director">
//             Director: <em>{director}</em>
//         </div>
//         <div className="movie-metascore">
//             Metascore: <strong>{metascore}</strong>
//         </div>
//         <h3>Actors</h3>

//         {stars.map(star => (
//             <div key={star} className="movie-star">
//                 {star}
//             </div>
//         ))}
//         </div>
//     </Link>
//   );
// }

export default MovieList;