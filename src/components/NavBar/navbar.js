import React from 'react';
import './navbar.css';
import logo from '../../assets/p_logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Sobre</Link>
                <Link activeClass='active' to='projetos' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Projetos</Link>
                <Link activeClass='active' to='contatos' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contatos</Link>
            </div>
        </nav>
    )
}

export default Navbar