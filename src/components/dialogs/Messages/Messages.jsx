import React from "react";
import MessageItem from "./messageItem/MessageItem";
import s from "./Messages.module.css";


const Messages = (props) => {
  let messagesData = [
    {id : 1, message : "Hi, bro, how are you?"},
    {id : 2, message : "i`m good, thanks!"}
  ]
  return (
    <div className={s.messages}>
      <MessageItem messageText={messagesData[0].message} />
      <MessageItem messageText={messagesData[1].message} />
    </div>
  );
};

export default Messages;
