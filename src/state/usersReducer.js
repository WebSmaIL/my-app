import { UsersAPI } from "../api/api";

const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CUR_PAGE = "SET_CUR_PAGE",
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    usersList: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map((user) => {
                    if (user.id === action.userID) {
                        return {
                            ...user,
                            followed: true,
                        };
                    }
                    return user;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map((user) => {
                    if (user.id === action.userID) {
                        return {
                            ...user,
                            followed: false,
                        };
                    }
                    return user;
                }),
            };

        case SET_USERS: {
            return {
                ...state,
                usersList: [...action.users],
            };
        }
        case SET_CUR_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.count,
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id !== action.userId
                      ),
            };
        }
        default:
            return state;
    }
};

// # ACTION CREATORS

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
        users: users,
    };
};
export const setCurPage = (currentPage) => {
    return {
        type: SET_CUR_PAGE,
        currentPage: currentPage,
    };
};
export const setTotalCount = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        count: count,
    };
};
export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    };
};
export const toggleFollowingProgress = (isFetching, id) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: id,
    };
};

// ## THUNK FUNCS
export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then((res) => {
            dispatch(setUsers(res.items));
            dispatch(setTotalCount(res.totalCount));
            dispatch(setIsFetching(false));
        });
    };
};

export const unfollowUserTC = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        UsersAPI.unfollowUser(id).then((res) => {
            if (res.resultCode === 0) {
                dispatch(unfollow(id));
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    };
};

export const followUserTC = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        UsersAPI.followUser(id).then((res) => {
            if (res.resultCode === 0) {
                dispatch(follow(id));
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    };
};



export default usersReducer;