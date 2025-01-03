import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import ContactPic from '../assets/ContactPic.jpg';
const Contact = () => {
    return(
        <div className = "contact">
            <div className = "section flex">
                <div className = "mt-10">
                    <h1 className = "text-4xl font-bold">Contact Us</h1>
                    <div>________</div>
                    <h3 className = "mb-2 contactText">Please check our FAQs before contacting us!</h3>
                    <div className = "mb-2 contactText hover:text-yellow-500 hover:underline">
                        <a href="https://www.instagram.com/illuminatechallenge/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size ="md:2x"/><span className ="text-xl ml-2 contactText">@illuminatechallenge</span></a>
                    </div>
                    <div className =  "contactText hover:text-yellow-500 hover:underline mb-4">
                        <a href = "mailto:illuminate.luminosity@gmail.com"><FontAwesomeIcon icon={faEnvelope} size ="md:2x"/> <span className ="text-xl ml-2 contactText">illuminate.luminosity@gmail.com</span></a>
                    </div>
                </div>
                <div className = "md:w-1/2">
                    <img className ="image justify-center sm:w-fit" src={ContactPic} alt="Contact"></img>
                </div>
            </div>
        </div>
    )
}
export default Contact;