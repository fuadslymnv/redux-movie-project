let initialState = {
    movies: [
    ],
    favoriteList: [],
    title: '',

};

export default function reducer(state=initialState, action){
    switch (action.type) {
        case 'SEARCH_MOVIES':
            let movies = [...action.payload.movies];
            return{
                movies: movies,
                favoriteList: state.favoriteList,
                title: state.title,
            }
        case 'ADD_FAVORITE':
            let favoriteList = [...action.payload.favoriteList];   
            return{
                movies: state.movies,
                favoriteList: favoriteList,
                title: state.title,
            }
        
        case 'CHANGE_TITLE':
            let title = action.payload.title;
            return{
                movies: state.movies,
                favoriteList: state.favoriteList,
                title: title,
            }

        default:
            return state;
    }
}