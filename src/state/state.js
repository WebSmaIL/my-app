const 
    ADD_POST = "ADD-POST",
    CHANGE_POST = "CHANGE-POST",
    ADD_MESSAGE = "ADD-MESSAGE",
    CHANGE_MESSAGE = "CHANGE-MESSAGE";

let store = {
    _state : {
        profile : {
            newPostText : "",
            postsData : [
                {
                    id: "1",
                    message:
                        "Hi, its my first post in this social network, my name is Ilya and i`m learning React!",
                    avatarURL:
                        "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg",
                    likeCount: "35",
                },
                {
                    id: "2",
                    message: "How are you bro?",
                    avatarURL:
                        "https://uprostim.com/wp-content/uploads/2021/03/image204-9.jpg",
                    likeCount: "21",
                },
                {
                    id: "3",
                    message: "im good, tnx!",
                    avatarURL:
                        "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg",
                    likeCount: "25",
                },
                {
                    id: "4",
                    message: "Wow, this social network is a crazy",
                    avatarURL:
                        "https://uprostim.com/wp-content/uploads/2021/03/image204-9.jpg",
                    likeCount: "101",
                },
            ],
        },
        dialogs : {
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
        },
    },
    _callSubscriber () {
        console.log('changes completed');
    },
    subscribe (observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        switch (action.type) {

            // ADD-POST CASE
            case ADD_POST:
                let newPost = {
                    id : 5,
                    message: this._state.profile.newPostText,
                    avatarURL: "https://a.d-cd.net/1a424f2s-960.jpg",
                    likeCount: "0",
                };
            
                this._state.profile.postsData.push(newPost);
                this._state.profile.newPostText = '';
                break;

            // CHANGE-POST CASE
            case CHANGE_POST:
                this._state.profile.newPostText = action.postText;
                break;

            // ADD-MESSAGE CASE
            case ADD_MESSAGE:
                let newMessage = {
                    id: 3,
                    message: this._state.dialogs.newMessageText 
                }
                this._state.dialogs.messagesData.push(newMessage);
                break;

            // CHANGE-POST CASE
            case CHANGE_MESSAGE:
                this._state.dialogs.newMessageText = action.newMesText;
                break;  
        }
        this._callSubscriber();
    }
}

export const addPostActionCreator = () => {
    return {
        type : ADD_POST
    }
};

export const changePostActionCreator = (text) => {
    return {
        type : CHANGE_POST,
        postText : text
    }
};

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

export default store;
window.store = store;