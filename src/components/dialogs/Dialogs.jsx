import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Messages from "./Messages/Messages";
import MessageInputContainer from "./messageInput/MessageInputContainer";

const Dialogs = (props) => {
    let dialogsData = props.store.getState().dialogs.dialogsData;
    let messagesData = props.store.getState().dialogs.messagesData;
    
    let dialogsElements = dialogsData.map((dialogItem) => (
        <DialogItem id={dialogItem.id} userName={dialogItem.userName} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>

            <div className={s.dialogWindow}>
                <Messages messagesData={messagesData} />
                <MessageInputContainer
                    store={props.store}
                />
            </div>
        </div>
    );
};

export default Dialogs;
