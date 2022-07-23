import React from "react";
import s from "./MessageInput.module.css";

const MessageInput = (props) => {
  let messageArea = React.createRef();

  let addMes = () => {
    let message = messageArea.current.value;
    props.addMessage(message);
  };

  return (
    <div className={s.inputBlock}>
      <textarea
        ref={messageArea}
        name="message"
        className={s.messageInput}
        placeholder="Enter the message..."
      />
      <button onClick={ addMes } className={s.inputBtn}>send</button>
    </div>
  );
};

export default MessageInput;
