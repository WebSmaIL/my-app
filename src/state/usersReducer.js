const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CUR_PAGE = "SET_CUR_PAGE",
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    usersList: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
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
                ...state, usersList:[ ...action.users]
            }
        }
        case SET_CUR_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state, totalCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
};

// ACTION CREATORS

export const follow = (id) => {
    return {
        type: FOLLOW,
        userID: id,
    };
};
export const unfollow = (id) => {
    return {
        type: UNFOLLOW,
        userID: id,
    };
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    };
};
export const setCurPage = (currentPage) => {
    return {
        type: SET_CUR_PAGE,
        currentPage: currentPage
    };
};
export const setTotalCount = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        count: count
    };
};
export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    };
};


export default usersReducer;