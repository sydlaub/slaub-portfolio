import './index.scss'
import headShot from '../../assets/images/headshot.png'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About Me
                </h1>

                <p>
                    I'm an ambitious web developer looking for an opportunity to work with the latest technologies on challenging and diverse projects. I love to learn and I am continuously working on my skills one project at a time.
                </p>

                <p>
                    I'm a question-asker, cylclist, intuitive decision maker, fresh New Yorker, playlist-maker, Detroit Lions Fan, Eucher player, (strictly fiction) reader, empath, problem solver, avid concert go-er, crossword puzzle enthusiast, over-sharer and much more.
                </p>
            </div>

            <div className='profile-picture'>
               <img src={headShot} alt = "me!"/> 
            </div>
        </div>
    )
}

export default About 