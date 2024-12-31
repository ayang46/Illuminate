import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import ContactPic from '../assets/ContactPic.jpg';
const Contact = () => {
    return(
        <div className = "contact">
            <div className = "section flex">
                <div className = "w-1/2 mt-20">
                    <h1 className = "text-4xl font-bold">Contact Us</h1>
                    <div>________</div>
                    <h3 className = "mb-4 mt-4">Please check our FAQs before contacting us!</h3>
                    <div className = "mb-4 hover:text-yellow-500 hover:underline">
                        <a href="https://www.instagram.com/illuminatechallenge/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size ="2x"/><span className ="text-xl ml-2">@illuminatechallenge</span></a>
                    </div>
                    <div className = "hover:text-yellow-500 hover:underline">
                        <a href = "mailto:illuminate.luminosity@gmail.com"><FontAwesomeIcon icon={faEnvelope} size ="2x"/> <span className ="text-xl ml-2">illuminate.luminosity@gmail.com</span></a>
                    </div>
                </div>
                <div className = "w-1/2">
                    <img className ="image justify-center sm:w-fit" src={ContactPic} alt="Contact"></img>
                </div>
            </div>
        </div>
    )
}
export default Contact;