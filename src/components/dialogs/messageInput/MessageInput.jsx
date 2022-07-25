import React from "react";
import s from "./MessageInput.module.css";

const MessageInput = (props) => {
    let messageArea = React.createRef();

    let addMes = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        props.changeMessage(messageArea.current.value);
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
