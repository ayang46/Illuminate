import React from 'react';
import AboutUsPic from '../assets/AboutUsPic.jpg';
const AboutUs = () => {
    return (
        <div className = "aboutUs">
            <div className = "flex section">
                <div className = "image flex-wrap w-2/3">
                    <img src={AboutUsPic} alt="About Us"></img>
                </div>
                <div className = "headingText w-1/3 mt-8 mb-10">
                        <span className = "text-orange-500 font-bold">_________</span>
                        <h2 className = "font-bold">About Us</h2>
                        <span className = "flex-wrap">A challenge for high school students which provides them the opportunity to work with other students all over the state to systematically improve Arizona.</span>
                        <div className = "flex mt-8 stats">
                            <span className = "flex-col mr-20"><h2 className = "font-extrabold" >50+</h2><p>fellows</p></span>
                            <span className = "flex-col"><h2 className = "font-extrabold">3+</h2 ><p>years</p></span>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;