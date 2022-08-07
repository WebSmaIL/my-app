import React from "react";
import s from "./MessageInput.module.css";


const MessageInput = (props) => {
    let messageArea = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = messageArea.current.value;
        props.updateMessageText(text);
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
            <button onClick={onAddMessage} className={s.inputBtn}>
                send
            </button>
        </div>
    );
};

export default MessageInput;
