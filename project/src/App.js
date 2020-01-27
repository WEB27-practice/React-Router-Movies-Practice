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
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route exact path="/movies/:id">
        <Movie />
      </Route>
    </div>
  );
};

export default App;