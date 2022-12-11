function actionSearchMovie(movies){

    return {
        type: 'SEARCH_MOVIES',
        payload: {
            movies: movies,
        }
    }
} 

export default actionSearchMovie;