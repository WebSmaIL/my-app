import React from "react";
import s from "./MessageInput.module.css";

const MessageInput = (props) => {

  let messageArea = React.createRef();

  let addMessage = () => {
    let message = messageArea.current.value;
    alert('Вы добавили сообщение ' + message);
  };

  return (
    <div className={s.inputBlock}>
      <textarea
        ref={messageArea}
        name="message"
        className={s.messageInput}
        placeholder="Enter the message..."
      />
      <button onClick={ addMessage } className={s.inputBtn}>send</button>
    </div>
  );
};

export default MessageInput;
