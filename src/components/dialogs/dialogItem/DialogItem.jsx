import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.item}>
      <NavLink to={"/dialogs?user_id=" + props.id} className={s.dialogLink}>
        {props.userName}
      </NavLink>
    </div>
  );
};

export default DialogItem;
