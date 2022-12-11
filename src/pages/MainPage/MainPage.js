import React from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

export default function MainPage ({movieList, searchMovie, favoriteList, title}) {
    
    return (
        <div className="main-page">
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__search-box">
                        <SearchBox searchMovie={searchMovie} />
                    </div>
                    <div className="main-page__movies">
                        <Movies movieList = {movieList} favoriteList={favoriteList} />
                    </div>
                </section>
                <aside className="main-page__favorites">
                    <Favorites favoriteList={favoriteList} title={title} />
                </aside>
            </main>
        </div>
    );
    
}
 
