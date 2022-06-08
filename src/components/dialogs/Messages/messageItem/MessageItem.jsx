import React from "react";
import s from "./MessageItem.module.css";


const MessageItem = (props) => {
  return (
    <div className={s.messageItem}>
      <span>{props.messageText}</span>
    </div>
  );
};

export default MessageItem;
