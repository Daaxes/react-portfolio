import {
  faCss3,
  faGitAlt,
  faHtml5,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

const About = () => {

  return (
    <>
      <div className="container about-page">
        <div className="textZoneAbout">
          <h1>
            About me
          </h1>
          <h2>
          <p>
              I'm an IT technician with long experience who now returns to what I originally was interested in. 
          </p>
          <p>
              For the time being I am studying for a future as a Front-end developer, coding in react, C#, asp.net, 
              I have knowlage in Java, C, C++ Visual basic and PHP. 
              This unique position allows me to balance on the border between IT technology and programming.
          </p>
          <p align="LEFT">
              I'm quite confident, naturally curious, and perpetually working on improving my skills.
          </p>
          <p>
              If I need to define myself in one sentence that would be a family person who like animals and who is very tech-obsessed!
          </p>
          </h2>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              {/* <FontAwesomeIcon icon={faAngular} color="#DD0031" /> */}
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              {/* <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> */}
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
