import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import ExpoPic from '../assets/ExpoPic.jpg';
import CohortPic from '../assets/CohortPic.jpg';
import Flyer from '../Illuminate24Flyer.png'

import React from 'react';

const IlluminateFellowInfo = () => {
    return (
        <div className="IFinfo" id="IlluminateFellowInfoSection">
            <div className="section">
                <h1 className="text-4xl flex-wrap font-bold text-center">Illuminate Fellow Program</h1>
                <h1 className="text-center text-orange-500 font-bold">_________</h1>
                <div className="flex text-left mt-8 info">
                    <div>
                        <ol class="relative border-s border-gray-200 dark:border-gray-700">
                            <li class="mb-10 ms-6 hover:bg-gray-100 hover:rounded-lg ">
                                <span class="absolute flex items-center justify-center w-6 h- rounded-full -start-3 ring-8 ring-yellow-500 dark:bg-gray-300 text-black">
                                    1
                                </span>
                                <div className="p-4">
                                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">Assemble and Register your team </h3>
                                    <p class="mb-4 text-base font-normal text-gray-600 ">Find a group of 2-4 AZ high school students to represent your community. Decide on a team name and register your team when the link is posted.</p>
                                    <a href={Flyer} target="_blank" rel="noopener noreferrer" download class="inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                        <FontAwesomeIcon icon={faDownload} size="1x" className="mr-3" />Download 2024 Flyer</a>
                                </div>
                            </li>
                            <li class="mb-10 ms-6 hover:bg-gray-100 hover:rounded-lg ">
                                <span class="absolute flex items-center justify-center w-6 h- rounded-full -start-3 ring-8 ring-yellow-500 dark:bg-gray-300 text-black">
                                    2
                                </span>
                                <div className="p-4">
                                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">Submit Your Proposal </h3>
                                    <p class="mb-4 text-base font-normal text-gray-600 "> Tell us who you are and what you have in mind in tackling this year's challenge. Be authentic! We want to learn about how you work in a team and problem solve. </p>
                                </div>
                            </li>
                            <li class="mb-10 ms-6 hover:bg-gray-100 hover:rounded-lg ">
                                <span class="absolute flex items-center justify-center w-6 h- rounded-full -start-3 ring-8 ring-yellow-500 dark:bg-gray-300 text-black">
                                    3
                                </span>
                                <div className="p-4">
                                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">Meet the Cohort </h3>
                                    <p class="mb-4 text-base font-normal text-gray-600 ">Your team will receive an email whether you have been selected to be part of the cohort. Meet the rest of your cohort and attend webinars! </p>
                                </div>
                            </li>
                            <li class="mb-10 ms-6 hover:bg-gray-100 hover:rounded-lg ">
                                <span class="absolute flex items-center justify-center w-6 h- rounded-full -start-3 ring-8 ring-yellow-500 dark:bg-gray-300 text-black">
                                    4
                                </span>
                                <div className="p-4">
                                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">Research and Build </h3>
                                    <p class="mb-4 text-base font-normal text-gray-600 ">Ideate with the cohort and create a protoype to solve the SDG challenge. Meet frequently with the cohort and Luminosity mentor(s) to share your progress. </p>
                                </div>
                            </li>
                            <li class="mb-10 ms-6 hover:bg-gray-100 hover:rounded-lg ">
                                <span class="absolute flex items-center justify-center w-6 h- rounded-full -start-3 ring-8 ring-yellow-500 dark:bg-gray-300 text-black">
                                    5
                                </span>
                                <div className="p-4">
                                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">Showcase </h3>
                                    <p class="mb-4 text-base font-normal text-gray-600 ">Implement the prototype in your community and present your findings at the Luminosity Expo in March! Network with Luminosity students, staff, and partners from all around the world. </p>
                                </div>
                            </li>
                            
                        </ol>


                    </div>
                    <div className = "IFPics">
                        <img src={CohortPic} className = "mb-4" alt="Cohort Fellows"></img>
                        <img src={ExpoPic} className = "" alt = "Luminosity Expo"></img>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IlluminateFellowInfo;