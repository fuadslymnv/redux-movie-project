import React from 'react';
import './ListPage.css';

export default function ListPage({favoriteList, title}) {    
    
    return (
        <div className="list-page">
            <h1 className="list-page__title">{title}</h1>
            <ul>
                {favoriteList.map((item) => {
                    let url = `https://www.imdb.com/title/${item.imdbID}`
                    return (
                        <li key={item.imdbID}>
                            <a href={url} rel="noreferrer" target="_blank">{item.title} ({item.year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
    
}