import s from './Nav.module.css';


const Nav = ()=> {
    return (
        <nav className={s.nav}>
        <a href="#index" className={s.navLink}>Messages</a>
        <a href="#index" className={s.navLink}>Profile</a>
        <a href="#index" className={s.navLink}>News</a>
        <a href="#index" className={s.navLink}>Music</a>
        <a href="#index" className={s.navLink}>Settings</a>
      </nav>
    );
}

export default Nav;