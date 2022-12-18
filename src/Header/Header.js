import logo from  '../logo/poke-logo.png';
import MainLogo from '../logo/header.png';
import sideloga from '../logo/side-logo.png';
import styles from './header.module.css';
import { memo } from 'react';
function Header(){

    return (
    <div className={styles.AppHeader} data-testid='Header'>
        <img className={styles.leftLogo} data-testid='leftLogo' src={logo} alt="logo" />

        <img className={styles.MainLogo} data-testid='mainLogo' src={MainLogo} alt="mainlogo"/>

        <img className={styles.rightLogo} data-testid='rightLogo' src={sideloga} alt="sideloga"/>
    </div>

    )
}

export default memo(Header);