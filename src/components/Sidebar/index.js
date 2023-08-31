import { Link, NavLink } from 'react-router-dom'
import './index.scss'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, 
    faHome, 
    faUser,
faCode } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
            {/* <img src={LogoS} alt="logo" />
            <img className= "sub-logo" src={LogoSubtitle} alt="slobodan" />   */}
            <h1>
                SYDNEY ROSE LAUB
            </h1>

        <nav>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/">
                <FontAwesomeIcon icon={faHome} color="#3266AE" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about">
                <FontAwesomeIcon icon={faUser} color="#3266AE" />
            </NavLink>

            <NavLink
                exact="true"
                activeclassname="active"
                className="work-link"
                to="/mywork">
                <FontAwesomeIcon icon={faCode} color="#3266AE" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#3266AE" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/sydney-laub-1b854919a/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#81A6DA" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel='noreferrer'
                    href='https://github.com/sydlaub'>
                    <FontAwesomeIcon icon={faGithub} color="#81A6DA" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar