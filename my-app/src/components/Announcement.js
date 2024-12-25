import React from 'react';

const Announcement = () => {
    return (
        <div className="section bg-yellow-100 p-20 m-10 justify-items-center">
            <h2 className=" lg:text-3xl sm:text-2xl text-center text-orange-500 font-extrabold">Announcement!</h2>
            <div className = "text-orange-400">____________</div>
            <h1 className=" lg:text-5xl sm:text-3xl font-bold text-center">Congratulations to our 2024-2025 Teams!</h1>
            <div className="grid-container">
                <div className="grid-item">EcoThreads</div>
                <div className="grid-item">Mindful Makers</div>
                <div className="grid-item">Quantum Coders</div>
                <div className="grid-item">SustainaBuddies</div>
                <div className="grid-item">DynamicDrain</div>
                <div className="grid-item">The Debuggers</div>
                <div className="grid-item">The Green Brigade</div>
                <div className="grid-item">EcoGreen</div>
            </div>
        </div>
    );
};

export default Announcement;