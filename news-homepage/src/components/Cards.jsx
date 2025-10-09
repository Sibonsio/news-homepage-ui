import '../components/Cards.css'
import Card from './Card.jsx'
import logo from '../assets/images/image-retro-pcs.jpg'
import logoTwo from '../assets/images/image-top-laptops.jpg'
import logoThree from '../assets/images/image-gaming-growth.jpg'




const Cards = ()=>{
    const data = [{  id:1,
        picture: logo,
        number:'01',title:'Reviving Retro',
        description:'What happens when old PCs are given morden upgrades?'},
    {   id:2,
        picture: logoTwo,
        number:'02',title:'Top 10 Laptops of 2022',
        description:'Our best picks for various needs and budgets'},
    {   id:3,
        picture: logoThree,
        number:'03',title:'The Growth of Gaming',
        description:'How the pandemic has sparked fresh opportunities'},
    ]
    const cards = data.map((card)=>{
        return <Card key={card.id} number={card.number} picture={card.picture} title={card.title} description={card.description}/>
    })

    return(
        <div className='cards'>
            {cards}
        </div>
    )
}
export default Cards