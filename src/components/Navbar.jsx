import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    return (<>
        <li className='nav__item'><Link className='nav__link text-2xl' to="/#Home">Home</Link></li>
        <li className='nav__item'><Link className='nav__link text-2xl' to="/#About">About us</Link></li>
        <li className='nav__item'><Link className='nav__link text-2xl' to="/Classes">Classes</Link></li>
        <li className='nav__item'><Link className='nav__link text-2xl' to="/Trainers/">Trainers</Link></li>
        <li className='nav__item'><Link className='nav__link text-2xl' to="/#Price">Price</Link></li>
        <li className='nav__item'><Link className='nav__link text-2xl' to="/#Form">Form</Link></li>
        <li className='nav__item'><Link className='nav__link text-2xl' to="/#Footer">Contact us</Link></li>
    </>);
}

export default Navbar;
