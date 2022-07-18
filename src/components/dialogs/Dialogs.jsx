import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Messages from "./Messages/Messages";
import MessageInput from './messageInput/MessageInput';


const Dialogs = (props) => {

  let dialogsData = [
    {id : "1", userName : "Василий"},
    {id : "2", userName : "Вероника"},
    {id : "3", userName : "Витя"},
    {id : "4", userName : "Даня"},
    {id : "5", userName : "Максим"}
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem id={dialogsData[0].id} userName={dialogsData[0].userName} />
        <DialogItem id={dialogsData[1].id} userName={dialogsData[1].userName} />
        <DialogItem id={dialogsData[2].id} userName={dialogsData[2].userName} />
        <DialogItem id={dialogsData[3].id} userName={dialogsData[3].userName} />
        <DialogItem id={dialogsData[4].id} userName={dialogsData[4].userName} />
      </div>

      <div className={s.dialogWindow}>
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

export default Dialogs;
