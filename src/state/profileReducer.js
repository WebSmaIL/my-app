const ADD_POST = "ADD-POST",
        CHANGE_POST = "CHANGE-POST";

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id : 5,
                message: state.newPostText,
                avatarURL: "https://a.d-cd.net/1a424f2s-960.jpg",
                likeCount: "0",
            };
        
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        // CHANGE-POST CASE
        case CHANGE_POST:
            state.newPostText = action.postText;
            return state;
        default:
            return state;
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

export default profileReducer;