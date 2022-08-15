

const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS";

let initialState = {
    usersList: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map((user)=>{
                    if(user.id === action.userID) {
                        return {
                            ...user,
                            followed : true
                        }
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map((user)=>{
                    if(user.id === action.userID) {
                        return {
                            ...user,
                            followed : false
                        }
                    }
                    return user;
                })
            };
        
        case SET_USERS: {
            return {
                ...state, usersList:[...state.usersList, ...action.users]
            }
        }
        default:
            return state;
    }
};

export const followAC = (id) => {
    return {
        type: FOLLOW,
        userID: id,
    };
};

export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        userID: id,
    };
};
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    };
};
export default usersReducer;
