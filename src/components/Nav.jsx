import { useState } from 'react';
import { ReactDimmer } from 'react-dimmer';
import { Menu } from './Menu';
import Navbar from './Navbar';
import menuIcon from '../images/menu.svg';
import logo from '../images/logo.svg';
import { Link } from "react-router-dom";

function Nav() {

    const [isMenuOpen, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu((prevState) => !prevState);
    };
    return (
        <div className='nav'>
            <ul className='nav__inner' >
                <Link to="/">
                    <img className='logo' src={logo} alt="logo" />
                </Link>
                <ul className='nav__list'>
                    <Navbar>
                    </Navbar>
                </ul>
            </ul>
            <Menu isMenuOpen={isMenuOpen} />
            <ReactDimmer
                isOpen={isMenuOpen}
                exitDimmer={setMenu}
                zIndex={100}
                blur={.5}
            />
            <img src={menuIcon} className="nav__btn" onClick={handleMenu} alt="menu" />
        </div >
    );
}

export default Nav;
