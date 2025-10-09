import '../components/Button.css'
import '../components/Navbar.css'
import menuIcon from '../assets/images/icon-menu.svg'



const Button = ({handleClick})=>{
    return(
        <>
        <button onClick={handleClick} className={`button`}><img src={menuIcon}/></button>
        </>
        
    )
}
export default Button