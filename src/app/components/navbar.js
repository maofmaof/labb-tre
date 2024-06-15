import Link from 'next/link';
import '../styles/navbar.css';
function Navbar() {

    return (
        <>
            <div className='navbar-container'>
                <ul className='navbar-list'>
                    <h1 className='navbar-header'>Nonsense </h1>

                    <li className='navbar-item'>
                        <Link className="navbar-link" href="/gallery"><p>Photo gallery</p> </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className="navbar-link" href="/spaceNews"><p>Space news feed</p> </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className="navbar-link" href="/"><p>Weather app</p> </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;