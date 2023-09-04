import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';


const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('gmail', 'service_anbyy5x', form.current, 'your-token')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message. Please try again.')
                }
            )
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
            <form ref={form} onSubmit={sendEmail}>

            </form>

            </div>
            </div>
        </div>
        </>
    )

    
}