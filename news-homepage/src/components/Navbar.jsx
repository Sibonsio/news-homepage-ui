import './Navbar.css'
import logo from '../assets/images/logo.svg'
import Button from './Button.jsx'

const Navbar = ({handleClick})=>{
    return(
        <nav className='navbar' id='navbar' >
            <img className='logo' src={logo} alt='logo' />
            <ul className='nav-list'>
                <li className='item'>Home</li>
                <li className='item'>New</li>
                <li className='item'>Popular</li>
                <li className='item'>Trending</li>
                <li className='item'>Categories</li>
            </ul>
            <Button handleClick={handleClick}/>
        </nav>
    )
}

export default Navbar