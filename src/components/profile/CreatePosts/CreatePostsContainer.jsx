import {
    addPostActionCreator,
    changePostActionCreator,
} from "../../../state/profileReducer";
import MyPosts from "./CreatePosts";
import { connect } from "react-redux/es/exports";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = changePostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    };
};
const CreatePostContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts);

export default CreatePostContainer;
