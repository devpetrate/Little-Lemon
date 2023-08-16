import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <ul>
                <li><Link to="/" className='navanchor'>Home</Link></li>
                <li><a href='#' className='navanchor'>About</a></li>
                <li><a href="#" className='navanchor'>Menu</a></li>
                <li><a href="#" className='navanchor'>Reservations</a></li>
                <li><a href="#" className='navanchor'>Order Online</a></li>
                <li><a href="#" className='navanchor'>Login</a></li>
            </ul>
        </>
    )
};
export default Nav;