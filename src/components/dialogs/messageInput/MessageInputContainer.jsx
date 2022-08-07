import React from "react";
import {
    addMesActionCreator,
    changeMesActionCreator,
} from "../../../state/dialogsReducer";
import MessageInput from "./MessageInput";

const MessageInputContainer = (props) => {
    let newMessageText = props.store.getState().dialogs.newMessageText;
    
    let addMessage = () => {
        let action = addMesActionCreator();
        props.store.dispatch(action);
    };

    let updateMessageText = (text) => {
        let action = changeMesActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MessageInput
            addMessage={addMessage}
            updateMessageText={updateMessageText}
            newMessageText={newMessageText}
        />
    );
};

export default MessageInputContainer;
