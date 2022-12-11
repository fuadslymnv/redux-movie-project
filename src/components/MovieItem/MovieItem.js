import React from 'react';
import './MovieItem.css';

import store from '../../redux/store';
import actionFavoriteList from '../../redux/actionFavoriteList';

export default function MovieItem(props) {

    const { imdbID, Title, Year, Poster } = props;

    let buttonClickHandler = (e) => {
        let favorite = {
            imdbID: imdbID,
            title: Title,
            year: Year
        }

        let favoriteList = props.favoriteList;
        let bool = favoriteList.filter((movie) => {
            return movie.imdbID === favorite.imdbID;
        })
        
        if(bool.length === 0)
            store.dispatch(actionFavoriteList([...favoriteList, favorite]))
    }
    
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={buttonClickHandler}>Добавить в список</button>
            </div>
        </article>
    );
    
}