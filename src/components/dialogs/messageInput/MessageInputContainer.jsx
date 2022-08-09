import {
    addMesActionCreator,
    changeMesActionCreator,
} from "../../../state/dialogsReducer";
import MessageInput from "./MessageInput";
import { connect } from "react-redux/es/exports";


let mapStateToProps = (state) => {
    return {
        newMessageText : state.dialogs.newMessageText
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText : (text) => {
            let action = changeMesActionCreator(text);
            dispatch(action);
        },
        addMessage : () => {
            let action = addMesActionCreator();
            dispatch(action);
        }
    };
}
const MessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInput);

export default MessageInputContainer;
