import React from "react";
import MessageItem from "./messageItem/MessageItem";
import s from "./Messages.module.css";

const Messages = (props) => {
    
    let messagesItems = props.messagesData.map((messageItem) => (
        <MessageItem messageText={messageItem.message} />
    ));

    return (
        <div className={s.messages}>
            { messagesItems }
        </div>
    );
};

export default Messages;
