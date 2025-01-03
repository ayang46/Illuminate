import React from 'react';
import AboutUsPic from '../assets/AboutUsPic.jpg';
const AboutUs = () => {
    return (
        <div className = "aboutUs">
            <div className = "flex section">
                <div className = "image w-2/3">
                    <img src={AboutUsPic} alt="About Us"></img>
                </div>
                <div className = "headingText w-1/3 mb-10">
                        <span className = "text-orange-500 font-bold">_________</span>
                        <h2 className = "font-bold mb-4">About Us</h2>
                        <span className = "justify-between">The Illuminate Challenge is just that-a challenge! It's an opportunity for high school students to represent their local community in a statewide effort to systematically improve Arizona. With a new prompt every year based on the UN's Sustainable Development Goals, the Illuminate Challenge promotes collaborative efforts between Arizona's brilliant high school students as they find ways to rethink, redesign, and implement their new ideas. </span>
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