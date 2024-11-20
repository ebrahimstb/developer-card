import email from '../assets/Icon.png'
import linkdin from '../assets/Vector.png'
// import cardimg from '../assets/0a4be9a6eaf565103fc6e2c325f3838a.png';
const Main = () => {
    return(
      <div className='main-div'>
        <div className="img-div">
          {/* <img src={cardimg} alt="cardimage" className='image'/> */}
        </div>
          <div className="info-main">
                <span className='info-name'>
                  <h1>Alili JOJO</h1>
                  <p className='tt'>talkative developer</p>
                  <p className='aa'>talkativejojo.olofofo.com</p>
                </span>
                <span className='info-btn'>
                      <button className='btn-1'>
                        <span className='icon'><img src={email} alt="email icon" /></span>
                        <span>Email</span>
                      </button>
                      <button className='btn-2'>
                        <span className='icon'><img src={linkdin} alt="email icon" /></span>
                        <span>Linkedin</span>
                      </button>
                </span>
          </div>
                
          <div className='about-main'>
              <div className='about-1'>
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
              </div>
              <div className='about-2'>
                <h3>interest</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
              </div>
            </div>
          </div>
      
    )
}
 export default Main
 