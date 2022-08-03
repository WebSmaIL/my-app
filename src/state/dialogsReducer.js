const ADD_MESSAGE = "ADD-MESSAGE",
        CHANGE_MESSAGE = "CHANGE-MESSAGE";

export const dialogsReducer = (state, action) => {
    switch(action.type){

        // ADD-MESSAGE CASE
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText 
            }
            state.messagesData.push(newMessage);
            return state;

        // CHANGE-POST CASE
        case CHANGE_MESSAGE:
            state.newMessageText = action.newMesText;
            return state;

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