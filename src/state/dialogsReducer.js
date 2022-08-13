const ADD_MESSAGE = "ADD-MESSAGE",
        CHANGE_MESSAGE = "CHANGE-MESSAGE";

let initialState = {
    newMessageText : "",
    messagesData : [
        { id: 1, message: "Hi, bro, how are you?" },
        { id: 2, message: "i`m good, thanks!" },
    ],
    dialogsData : [
        { id: "1", userName: "Василий" },
        { id: "2", userName: "Вероника" },
        { id: "3", userName: "Витя" },
        { id: "4", userName: "Даня" },
        { id: "5", userName: "Максим" },
    ],
};
const dialogsReducer = (state = initialState, action) => {
    switch(action.type){

        // ADD-MESSAGE CASE
        case ADD_MESSAGE:{
            let stateCopy = {...state};
            let newMessage = {
                id: 3,
                message: stateCopy.newMessageText 
            }
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        // CHANGE-POST CASE
        case CHANGE_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMesText;
            return stateCopy;
        }

        default:
            return state;
    }
}

export const addMesActionCreator = () => {
    return {
        type : ADD_MESSAGE
    }
}

export const changeMesActionCreator = (text) => {
    return {
        type : CHANGE_MESSAGE,
        newMesText : text
    }
}

export default dialogsReducer;