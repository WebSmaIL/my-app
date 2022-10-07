import {ProfileAPI, UsersAPI} from "../api/api";

const ADD_POST = "ADD-POST",
        CHANGE_POST = "CHANGE-POST",
        SET_USER_PROFILE = "SET_USER_PROFILE",
        SET_STATUS = "SET_STATUS";

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
    profile : null,
    status: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id : 5,
                message: state.newPostText,
                avatarURL: "https://a.d-cd.net/1a424f2s-960.jpg",
                likeCount: "0",
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText:''
            };
        }
        // CHANGE-POST CASE
        case CHANGE_POST:{
            return {
                ...state,
                newPostText : action.postText
            };
        }

        case SET_USER_PROFILE:{
            return {
                ...state,
                profile : action.profile
            };
        }

        case SET_STATUS:{
            return {
                ...state,
                status : action.status
            };
        }
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

export const setUserProfile = (profile) => {
    return {
        type : SET_USER_PROFILE,
        profile
    }
};

export const setStatusAC = (status) => {
    return {
        type : SET_STATUS,
        status
    }
};

export const getStatusTC = (uid) => {
    return (dispatch) => {
        
        ProfileAPI.getStatus(uid).then(res => {
            dispatch(setStatusAC(res.data));
        })
    }
};

export const updateStatusTC = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        })
    }
};

export const getUserProfileTC = (uid) => {
    return (dispatch) => {
        UsersAPI.getProfile(uid).then((res) => {
            dispatch(setUserProfile(res.data));
        });
    }
}

export default profileReducer;