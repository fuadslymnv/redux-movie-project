export default function actionFavoriteList(favoriteList){

    return{
        type: 'ADD_FAVORITE',
        payload: {
            favoriteList: favoriteList,
        }
    }
}