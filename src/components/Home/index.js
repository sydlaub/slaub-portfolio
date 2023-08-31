// import { useEffect, useState  } from 'react';
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi! <br/> I'm Syd.</h1>
                <h2>WEB DEVELOPER. PROBLEM SOLVER. CREATIVE THINKER.</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
        </>
    )
}

export default Home 