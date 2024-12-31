import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="section text-white">
                <h1 className="text-4xl text-center font-bold">Hear From Your Peers</h1>
                <div className="text-center text-orange-400">________</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="text-left p-4 h-100">
                        <FontAwesomeIcon icon={faQuoteLeft} size="4x" className="mb-4" />
                        <h3 className = "mb-4">“Somebody’s quote and why they like this program. “Somebody’s quote and why they like this program.“Somebody’s quote and why they like this program."</h3>
                        <p className = "text-lg text-orange-400">First Last</p>
                        <p>___ HS' 26</p>
                        <p> ___ Illuminate Fellow '23 </p>
                    </div>
                    <div className="text-left p-4 h-100">
                        <FontAwesomeIcon icon={faQuoteLeft} size="4x" className="mb-4" />
                        <h3>“Somebody’s quote and why they like this program. “Somebody’s quote and why they like this program.“Somebody’s quote and why they like this program."</h3>
                        <p className = "text-lg text-orange-400">First Last</p>
                        <p>___ HS' 26</p>
                        <p> ___ Illuminate Fellow '23 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;