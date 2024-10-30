import React from "react";
import AboutImage from "../assets/aboutme-image.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCodeBranch } from 'react-icons/fa';


const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 shadow-xl transform transition-transform duration-500 hover:scale-105"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 leading-relaxed">
            Skilled in HTML, CSS, and JavaScript, with expertise in React and Redux for building dynamic user interfaces.
Proficient in Bootstrap and Tailwind, ensuring responsive design for seamless user experiences.
Passionate about crafting intuitive web applications that prioritize user engagement and accessibility.
            </p>
            <div className="space-y-4">
      <div className="flex items-center">
        <label className="w-1/4 text-sm font-semibold text-gray-300 flex items-center">
          <FaHtml5 className="mr-2" /> HTML & CSS
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
            transition-all duration-500 ease-in-out transform hover:scale-105"
            style={{ width: "90%" }}
          ></div>
        </div>
      </div>
      <div className="flex items-center">
        <label className="w-1/4 text-sm font-semibold text-gray-300 flex items-center">
          <FaJs className="mr-2" /> JavaScript
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
            transition-all duration-500 ease-in-out transform hover:scale-105"
            style={{ width: "90%" }}
          ></div>
        </div>
      </div>
      <div className="flex items-center">
        <label className="w-1/4 text-sm font-semibold text-gray-300 flex items-center">
          <FaReact className="mr-2" /> React JS
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
            transition-all duration-500 ease-in-out transform hover:scale-105"
            style={{ width: "80%" }}
          ></div>
        </div>
      </div>
      <div className="flex items-center">
        <label className="w-1/4 text-sm font-semibold text-gray-300 flex items-center">
          <FaCodeBranch className="mr-2" /> Redux Toolkit
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
            transition-all duration-500 ease-in-out transform hover:scale-105"
            style={{ width: "70%" }}
          ></div>
        </div>
      </div>
      <div className="flex items-center">
        <label className="w-1/4 text-sm font-semibold text-gray-300 flex items-center">
          <FaCss3Alt className="mr-2" /> Tailwind & Bootstrap <br />Framework
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
            transition-all duration-500 ease-in-out transform hover:scale-105"
            style={{ width: "70%" }}
          ></div>
        </div>
      </div>
    </div>
            <div className="mt-12 flex justify-center gap-12 text-center">
              <div className="bg-gray-900 px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
                  1+
                </h3>
                <p className="text-sm font-medium text-gray-400">Years Experience</p>
              </div>
              <div className="bg-gray-900 px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
                  15+
                </h3>
                <p className="text-sm font-medium text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
