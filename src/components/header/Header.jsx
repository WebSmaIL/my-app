import React  from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props)=> {
    return (
        <header className={s.header}>
            <img className={s.logo}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6accda124378403.6102a3979b5da.jpg"
            alt=""
            />
            <div className={s.loginBlock}>
                {props.isAuth ? <div className={s.loginLink}>{props.login}</div>  : <NavLink className={s.loginLink} to="/login"><span>LOGIN</span></NavLink>}
                
            </div>
        </header>
    );
}

export default Header;