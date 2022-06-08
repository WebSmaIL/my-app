import React from "react";
import s from "./MessageInput.module.css";

const MessageInput = (props) => {
  return (
    <div className={s.inputBlock}>
      <textarea
        name="message"
        className={s.messageInput}
        placeholder="Enter the message..."
      />
      <button className={s.inputBtn}>send</button>
    </div>
  );
};

export default MessageInput;
