import React from 'react';
import BannerImg from '../assets/IlluminateChallengeBanner.png';

const LandingPage = () => {
    return (
        <div className="landingPage text-white w-full">
            <div class="flex section">
                <div className="image flex-wrap">
                    <img src={BannerImg} className="img justify-self-center" alt="Illuminate Banner"></img>
                </div>
                <div className="headingText w-1/2 flex-wrap mt-20 justify-items-center">
                    <h1 className="text-orange-100 font-extrabold">ILLUMINATE</h1><h1 className="text-orange-300 font-extrabold mb-10">CHALLENGE</h1>
                    <p className=" mb-10">Empowering Arizona Students, Strengthening Arizona Communities</p>
                    <span className = "flex"><button className="text-white border border-white rounded-md px-4 py-2 w-60 hover:shadow-lg hover:font-semibold transition-colors duration-300 ease-in-out hover:text-black">Apply</button>
                    <a href="/" className="hover:underline hover:text-yellow-500">Learn More</a></span>
                </div>

            </div>
        </div>
    )
}
export default LandingPage;