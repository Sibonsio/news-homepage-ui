import '../components/Button.css'
import '../components/Navbar.css'

// The button is reusable

const Button = ({handleClick})=>{
    return(
        <>
        <button onClick={handleClick} className={`button`}><hr/><hr/><hr/></button>
        </>
        
    )
}
export default Button