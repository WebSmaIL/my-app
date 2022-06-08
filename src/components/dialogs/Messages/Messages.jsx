import React from "react";
import MessageItem from "./messageItem/MessageItem";
import s from "./Messages.module.css";


const Messages = (props) => {
  return (
    <div className={s.messages}>
      <MessageItem messageText="Hi, bro, how are you?" />
      <MessageItem messageText="i`m good, thanks!" />
    </div>
  );
};

export default Messages;
