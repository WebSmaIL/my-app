import React from "react";
import preloader from "../../../assets/images/loader/Spinner.gif";
import s from "./preloader.module.css";

const Preloader = (props) => {
    return <img className={s.loader} src={preloader} alt="/"/>;
};

export default Preloader;