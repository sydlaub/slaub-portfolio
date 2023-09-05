import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss';


const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault()

        // emailjs
        //     .sendForm('gmail', 'service_anbyy5x', form.current, 'your-token')
        //     .then(
        //         () => {
        //             alert('Message successfully sent!')
        //             window.location.reload(false)
        //         },
        //         () => {
        //             alert('Failed to send the message. Please try again.')
        //         }
        //     )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                        Please contact me if you have any requests or questions using the form below!
                    </p>
                    <div className='contact-form'>
                        {/* <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input placeholder='Name' type='text' name='name' required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form> */}
                    </div>
                </div>
                {/* <div className='info-map'>
                    Sydney Laub,
                    <br />
                    New York, New York
                    <br />
                    <span>syd.laub18@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[40.743, -73.980]} zoom={13}>
                        <TileLayer url="https://www.openstreetmap.org/#map=15/40.7437/-73.9738.png" />
                        <Marker position={[40.743, -73.980]}>
                            <Popup>Hey! I live here!</Popup>
                        </Marker>
                    </MapContainer>
                </div> */}


            </div>
        </>
    )


}

export default Contact