import Link from 'next/link';
import '../styles/navbar.css';
function Navbar() {

    return (
        <>
            <div className='navbar-container'>
                <ul className='navbar-list'>
                    <h1 className='navbar-header'>Nonsense </h1>

                    <li className='navbar-item'>
                        <Link className="navbar-link" href="/gallery"><p>gallery</p> </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className="navbar-link" href="/"><p>home</p> </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className="navbar-link" href="/about"><p>about</p> </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;