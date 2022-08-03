import React from "react";
import { addMesActionCreator, changeMesActionCreator } from "../../../state/dialogsReducer";
import s from "./MessageInput.module.css";



const MessageInput = (props) => {
    let messageArea = React.createRef();

    let addMes = () => {
        let action = addMesActionCreator();
        props.dispatch(action);
    };

    let onMessageChange = () => {
        let text = messageArea.current.value;
        let action = changeMesActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.inputBlock}>
            <textarea
                ref={messageArea}
                name="message"
                className={s.messageInput}
                placeholder="Enter the message..."
                value={props.newMessageText}
                onChange={onMessageChange}
            />
            <button onClick={addMes} className={s.inputBtn}>
                send
            </button>
        </div>
    );
};

export default MessageInput;
