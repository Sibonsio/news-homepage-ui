import '../components/Sidebar.css'
import closeIcon from '../assets/images/icon-menu-close.svg'

const Sidebar = ({handleClose, active})=>{
    return(
        <nav className={`sidebar ${active}`} id='sidebar' >
            <ul className='side-list'>
                <li className='item-bar'>Home</li>
                <li className='item-bar'>New</li>
                <li className='item-bar'>Popular</li>
                <li className='item-bar'>Trending</li>
                <li className='item-bar'>Categories</li>
            </ul>
            <button onClick={handleClose} className='side-button'><img src={closeIcon}/></button>
        </nav>
    )
}

export default Sidebar