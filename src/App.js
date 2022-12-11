import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';

import store from './redux/store';

export default function App() {
  let [movieList, setMovieList] = React.useState([]);
  let [favoriteList, setFavoriteList] = React.useState([]);
  let [title, setTitle] = React.useState('');

  const searchMovie = async(searchLine) => {
    let url = `https://www.omdbapi.com/?apikey=d554bc03&s=${searchLine}`;
    let response = await fetch(url);
    let data = await response.json();
    let movieList = data.Search;
    return movieList;
  }

  React.useEffect(() => {
    store.subscribe(() => {
        const state = store.getState();
        setMovieList(state.movies);
        setFavoriteList(state.favoriteList);
        setTitle(state.title);
    })
  })

  return (
    <div className="app">
      
      <Route exact path="/" render={
        () => <MainPage movieList={movieList} searchMovie={searchMovie} favoriteList={favoriteList} title={title} />
        } />
      
      <Route path="/list/:id" exact render={() => <ListPage favoriteList={favoriteList} title={title} />} />
    </div>
  );
  
}

