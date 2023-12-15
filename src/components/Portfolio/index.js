import munamiiCakeryImg from '../Images/MunamiiCakery.png';
import CVImg from '../Images/cv.png';
import './index.css'

const Portfolio = () => { 

    return (
        <>
          {/* <div className="container contact-page"> */}
            <div className="textZonePortfolio">
                <h1>
                    Portfolio
                </h1>
            </div>
        {/* </div> */}
        <div className='imagezonePortfolio'>
                <img src={munamiiCakeryImg} alt='Munamii Cakery side' /> 
                <a href='https://daaxes.github.io/Munamii-Webshop/' target='_blank' rel='noreferrer'>
                <p>Munamii Cakery</p></a>
            </div>
            <div className='imagezonePortfolio2'>
                <img src={CVImg} alt='CV' /> 
                <a href='https://daaxes.github.io/MyCV/' target='_blank' rel='noreferrer'>
                <p>CV</p></a>
            </div>
        </>
    );
}

export default Portfolio;