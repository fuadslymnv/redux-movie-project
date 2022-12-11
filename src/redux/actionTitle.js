export default function actionTitle(title){
    return{
        type: 'CHANGE_TITLE',
        payload: {
            title: title,
        }
    }
}