import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Messages from "./Messages/Messages";
import MessageInput from "./messageInput/MessageInput";

const Dialogs = (props) => {
    let dialogsData = [
        { id: "1", userName: "Василий" },
        { id: "2", userName: "Вероника" },
        { id: "3", userName: "Витя" },
        { id: "4", userName: "Даня" },
        { id: "5", userName: "Максим" },
    ];

    let dialogsElements = dialogsData.map((dialogItem) => (
        <DialogItem id={dialogItem.id} userName={dialogItem.userName} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>

            <div className={s.dialogWindow}>
                <Messages />
                <MessageInput />
            </div>
        </div>
    );
};

export default Dialogs;
