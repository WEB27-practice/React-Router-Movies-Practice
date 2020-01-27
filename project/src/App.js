import React, { useState } from 'react';
import { Route } from "react-router-dom";

import Movie from "./Movies/Movie.js";
import MovieList from "./Movies/MovieList.js";
import SavedList from './Movies/SavedList.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={props => <MovieList {...props}/>}/>
      <Route exact path="/:id" render={props => <Movie {...props} addToSavedList={ addToSavedList } />} />
    </div>
  );
};

export default App;