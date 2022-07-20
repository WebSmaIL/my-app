import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Messages from "./Messages/Messages";
import MessageInput from "./messageInput/MessageInput";

const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogsData.map((dialogItem) => (
        <DialogItem id={dialogItem.id} userName={dialogItem.userName} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>

            <div className={s.dialogWindow}>
                <Messages messagesData = {props.state.messagesData} />
                <MessageInput />
            </div>
        </div>
    );
};

export default Dialogs;
