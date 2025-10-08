import '../components/Hero.css'
import heroImage from '../assets/images/image-web-3-desktop.jpg'

const Hero = ()=>{
    return(
        <div className='hero'>
            <img className='hero-image' src={heroImage}/>
            <div className='text-container'><div className='title-div'><h1 className='title'>The Bright Future of Web 3.0?</h1></div>
            <div className='button-div'>
            <p className='description'>We dive into the next evolution of the web that claims to put the power 
                of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </p>
            <button className='herobutton'>READ MORE</button>
            </div>
            </div>
            <div className='news-container'><h2 className='news-title'>New</h2>
            <div className='news-items'>
            <h3 className='news-item'>Hydrogen VS Electic Cars</h3>
            <p className='news-description'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr/>
            <h3 className='news-item'>The Downsides of AI Artistry</h3>
            <p className='news-description'>What are the possible adverse effects of on-demand AI image generation?</p>
            <hr/>
            <h3 className='news-item'>Is VC Funding Drying Up?</h3>
            <p className='news-description last'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
            
            </div>
        </div>
    )
}
export default Hero