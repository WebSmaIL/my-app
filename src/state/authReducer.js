import { AuthAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // ADD-MESSAGE CASE
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }

        default:
            return state;
    }
};

export const setUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login },
    };
};

export const getUserDataTC = () => {
    return (dispatch) => {
        AuthAPI.getMe().then((res) => {
            if (res.data.resultCode === 0) {
                let { id, email, login } = res.data.data;
                dispatch(setUserData(id, email, login));
            }
        });
    };
};
export default authReducer;
