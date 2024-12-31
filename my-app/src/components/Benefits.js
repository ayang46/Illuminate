import React from 'react';

const Benefits = () => {
    return(
        <div className = "benefits">
            <div className = "section">
                <h1 className = "text-4xl font-bold text-center">Why Join?</h1>
                <h1 className="text-center text-orange-500 font-bold">_________</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
                    <div className="text-center bg-gray-100 p-4 h-100 hover:border hover:border-yellow-500 hover:bg-gray-200">
                        <h2 className = "mt-12 text-orange-500 font-semibold text-xl">Lasting Impact</h2>
                        <div>_______</div>
                        <h3 className = "p-6">Collaborate with a handpicked team to tackle meaningful projects that create lasting change in your AZ community.</h3>
                    </div>
                    <div className="text-center bg-gray-100 p-4 h-100 hover:border hover:border-yellow-500 hover:bg-gray-200">
                        <h2 className = "mt-12 text-orange-500 font-semibold text-xl">Leadership Development</h2>
                        <div>_______</div>
                        <h3 className = "p-6">Gain unique opportunities to lead, inspire, and work effectively in a team setting.</h3>
                    </div>
                    <div className="text-center bg-gray-100 p-4 h-100 hover:border hover:border-yellow-500 hover:bg-gray-200">
                        <h2 className = "mt-12 text-orange-500 font-semibold text-xl">Personal Connection</h2>
                        <div>_______</div>
                        <h3 className = "p-6">Build lasting friendships and mentorships with like-minded peers and community leaders.</h3>
                    </div>
                    <div className="text-center bg-gray-100 p-4 h-100 hover:border hover:border-yellow-500 hover:bg-gray-200">
                        <h2 className = "mt-12 text-orange-500 font-semibold text-xl">Continuous Learning</h2>
                        <div>_______</div>
                        <h3 className = "p-6">Expand your knowledge, stay adaptable in a changing world, and unlock new opportunities.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Benefits;