import logo from  '../logo/poke-logo.png';
import MainLogo from '../logo/header.png';
import sideloga from '../logo/side-logo.png';
import styles from './header.module.css';
import { memo } from 'react';
function Header(){

    return (
    <div className={styles.AppHeader}>
        <img className='logo' src={logo} alt="logo" />

        <img className='mainlogo' src={MainLogo} alt="mainlogo"/>

        <img className='sideloga' src={sideloga} alt="sideloga"/>
    </div>

    )
}

export default memo(Header);