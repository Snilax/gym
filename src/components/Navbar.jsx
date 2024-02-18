import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Navbar() {
    return (<>
        <li className='nav__item'><HashLink className='nav__link text-2xl' to="/#top">Home</HashLink></li>
        <li className='nav__item'><HashLink className='nav__link text-2xl' to="/#About">About us</HashLink></li>
        <li className='nav__item'><Link className='nav__link text-2xl' to="/Classes">Classes</Link></li>
        <li className='nav__item'><Link className='nav__link text-2xl' to="/Trainers/">Trainers</Link></li>
        <li className='nav__item'><HashLink className='nav__link text-2xl' to="/#Price">Price</HashLink></li>
        <li className='nav__item'><HashLink className='nav__link text-2xl' to="/#Form">Form</HashLink></li>
        <li className='nav__item'><HashLink className='nav__link text-2xl' to="/#Footer">Contact us</HashLink></li>
    </>);
}

export default Navbar;
