import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Messages from "./Messages/Messages";
import MessageInput from './messageInput/MessageInput';


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem id="1" userName="Василий" />
        <DialogItem id="2" userName="Вероника" />
        <DialogItem id="3" userName="Витя" />
        <DialogItem id="4" userName="Даня" />
        <DialogItem id="5" userName="Максим" />
      </div>

      <div className={s.dialogWindow}>
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

export default Dialogs;
