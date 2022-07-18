import React from "react";
import MessageItem from "./messageItem/MessageItem";
import s from "./Messages.module.css";

const Messages = (props) => {
    let messagesData = [
        { id: 1, message: "Hi, bro, how are you?" },
        { id: 2, message: "i`m good, thanks!" },
    ];

    let messagesItems = messagesData.map((messageItem) => (
        <MessageItem messageText={messageItem.message} />
    ));

    return (
        <div className={s.messages}>
            { messagesItems }
        </div>
    );
};

export default Messages;
