import '../components/Sidebar.css'
import closeIcon from '../assets/images/icon-menu-close.svg'

const Sidebar = ({handleClose, active})=>{
    return(
        <nav className={`sidebar ${active}`} id='sidebar' >
            <ul className='side-list'>
                <li className='item-bar item-1'>Home</li>
                <li className='item-bar item-2'>New</li>
                <li className='item-bar item-3'>Popular</li>
                <li className='item-bar item-4'>Trending</li>
                <li className='item-bar item-5'>Categories</li>
            </ul>
            <button onClick={handleClose} className='side-button'><img src={closeIcon}/></button>
        </nav>
    )
}

export default Sidebar