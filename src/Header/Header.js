import logo from  '../logo/poke-logo.png';
import MainLogo from '../logo/header.png';
import sideloga from '../logo/side-logo.png';
import './header.css';
function Header(){

    return (
        <>
        <img className='logo' src={logo} alt="logo" />

        <img className='mainlogo' src={MainLogo} alt="mainlogo"/>

        <img className='sideloga' src={sideloga} alt="sideloga"/>
        </>

    )
}

export default Header;