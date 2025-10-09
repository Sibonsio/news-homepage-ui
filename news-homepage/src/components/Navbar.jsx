import './Navbar.css'
import logo from '../assets/images/logo.svg'
import Button from './Button.jsx'

const Navbar = ({handleClick})=>{
    return(
        <nav className='navbar' id='navbar' >
            <img className='logo' src={logo} alt='logo' />
            <ul className='nav-list'>
                <li className='item item-1'>Home</li>
                <li className='item item-2'>New</li>
                <li className='item item-3'>Popular</li>
                <li className='item item-4'>Trending</li>
                <li className='item item-5'>Categories</li>
            </ul>
            <Button handleClick={handleClick}/>
        </nav>
    )
}

export default Navbar