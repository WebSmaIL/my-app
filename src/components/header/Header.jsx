import React  from 'react';
import s from './Header.module.css';

const Header = ()=> {
    return (
        <header className={s.header}>
            <img className={s.logo}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6accda124378403.6102a3979b5da.jpg"
            alt=""
            />
        </header>
    );
}

export default Header;