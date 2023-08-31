// import { useEffect, useState  } from 'react';
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, I'm Sydney</h1>
                <h2>I'm a question-asker, full-stack web developer, cylclist, intuitive decision maker, fresh New Yorker, playlist-maker, data engineer, Detroit Lions Fan, Eucher player, reader, empath, problem solver, avid concert go-er and much more.</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home 