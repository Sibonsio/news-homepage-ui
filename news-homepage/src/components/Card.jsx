import '../components/Card.css';


const Card = ({number,title,description,picture})=>{
    return(<div className='card'>
        <div className='card-image item-1'><img src={picture}/></div>
        <div className='card-text item-2'><h2 className='card-number'>{number}</h2>
        <h3 className='card-title item-3'>{title}</h3>
        <p className='card-description'>{description}</p></div>
    </div>)
}
export default Card;

