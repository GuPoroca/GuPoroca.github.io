import React from 'react';
import './navbar.css';
import logo from '../../assets/p_logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div></div>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Sobre</Link>
                <Link className="desktopMenuListItem">Projetos</Link>
                <Link className="desktopMenuListItem">Contatos</Link>
            </div>
            <div></div>
            <div></div><div></div>
        </nav>
    )
}

export default Navbar