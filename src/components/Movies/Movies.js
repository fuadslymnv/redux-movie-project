import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

export default function Movies({movieList, favoriteList}) {
    
    return ( 
        <ul className="movies">
            {
                (movieList) ? 
                movieList.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} favoriteList={favoriteList} />
                    </li>
                ))
                : null
            }
        </ul>
    );
    
}