import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Messages from "./Messages/Messages";
import MessageInputContainer from "./messageInput/MessageInputContainer";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((dialogItem) => (
        <DialogItem id={dialogItem.id} key={dialogItem.id} userName={dialogItem.userName} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>

            <div className={s.dialogWindow}>
                <Messages messagesData={props.messagesData} />
                <MessageInputContainer />
            </div>
        </div>
    );
};

export default Dialogs;
