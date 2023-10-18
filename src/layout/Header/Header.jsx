import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header className='bg-[black] text-white fixed w-[100%]'>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}
export default Header;