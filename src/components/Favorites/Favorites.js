import React from 'react';
import {Link} from 'react-router-dom';
import './Favorites.css';

import store from '../../redux/store';
import actionFavoriteList from '../../redux/actionFavoriteList';
import actionTitle from '../../redux/actionTitle';

export default function Favorites({favoriteList, title}) {
    let [saveList, setSaveList] = React.useState(true);
    

    const buttonClickHandler = (e) => {
        store.dispatch(actionFavoriteList(
            favoriteList.filter((movie) =>{
                return movie.imdbID !== e.target.id;
            })
        ))
    }

    const onSaveHandler = (e) => {
        setSaveList(false);
    }

    const onChangeHandler = (e) => {
        store.dispatch(actionTitle(e.target.value))
    }

    return (
        <div className="favorites">
            <input id='listName' placeholder="Введите название списка" className="favorites__name" onChange={onChangeHandler} />
            <ul className="favorites__list">
                {
                    (favoriteList) ? 
                    favoriteList.map((item) => {
                            // console.log(item.imdbID)
                            return <li key={item.imdbID}>
                                        <span>{item.title} ({item.year})</span> 
                                        <button id={item.imdbID} onClick={buttonClickHandler}>X</button>
                                    </li>;
                        }) 
                        :
                        null
                }
            </ul>
            {
                (saveList) ?
                <button type="button" className="favorites__save" onClick={onSaveHandler} disabled={(title && favoriteList) ? false : true}>Сохранить список</button>
                :
                <Link to='/list/:id'>{title}</Link>
            }   
        </div>
    );
    
}