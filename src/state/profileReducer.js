const ADD_POST = "ADD-POST",
        CHANGE_POST = "CHANGE-POST";

const profileReducer = (state, action) => {
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