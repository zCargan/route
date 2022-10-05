import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../logoNewMe2.ico';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const CloseMobileMenu = () => setClick(false);
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                NewMe <img src={logo} alt="NewMeLogo"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div> 
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={CloseMobileMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/objectifs" className='nav-links' onClick={CloseMobileMenu}>
                        Objectifs
                    </Link>
                </li>
                <li>
                    <Link to="/carte" className='nav-links' onClick={CloseMobileMenu}>
                        Carte
                    </Link> 
                </li>
                <li>
                    <Link to="/adefinir" className='nav-links' onClick={CloseMobileMenu}>
                        ?
                    </Link>
                </li>
                <li>
                    <Link to="/profil" className='nav-links' onClick={CloseMobileMenu}>
                        Profil
                    </Link>
                </li>
            </ul>    
        </div>
    </nav>
  )
}

export default Navbar