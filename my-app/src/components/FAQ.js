import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
    <div>
        <h2>
            <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-semibold text-gray-800 border-b border-gray-400  gap-3"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <svg
                    className={`w-3 h-3 transform ${isOpen ? '':'rotate-180' } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                    />
                </svg>
            </button>
        </h2>
        <div
            className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
                isOpen ? 'max-h-40' : 'max-h-0'
            }`}
        >
            <div className="p-5 border-b border-gray-400">
                <p className="mb-2 text-orange-600">{content}</p>
            </div>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'When do I apply?',
            content: (
                <>
                    We will begin posting about the next Illuminate cohort application fall 2025. Please follow our Instagram  
                    <span> </span>
                    <a href="https://www.instagram.com/illuminatechallenge " target="_blank" rel="noopener noreferrer" className="text-yellow-500 underline">
                        (@illuminatechallenge)
                    </a> 
                    <span> </span>
                    to stay up to date!
                </>
            )
        },
        {
            title: 'Who should apply?',
            content: 'Any Arizona High School students are welcome to apply!',
        },
        {
            title: 'When will I hear back about if I become an Illuminate Fellow?',
            content: 'Our Illuminate staff will be reviewing the proposals and send out the notfication results within the following 2 weeks. All biased information such as names, school district, county, and school names will be redacted during the deliberation and selection.',
        },
        {
            title: 'What should I include in my team proposal?',
            content: 'Please follow the rubric that has been emailed out to the email your team has registered with. Be sure to proofread before submitting your final version!',
        },
    ];

    return (
        <div className="section">
            <h1 className="text-4xl text-center font-bold">FAQs</h1>
            <div className="text-center text-orange-400">________</div>
            <div id="accordion-flush">
                {accordionData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onToggle={() => toggleAccordion(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;