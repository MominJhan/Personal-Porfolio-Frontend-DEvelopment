import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing, modern, and user-friendly web designs tailored to elevate your brand. From concept to completion, we ensure every element is designed with purpose, beauty, and usability in mind.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces that captivate users and enhance engagement. Using the latest technologies, we ensure your website is not only functional but also a pleasure to explore on any device.",
  },
  {
    id: 3,
    title: "UI/UX Design Implementation",
    description: "Convert design mockups (from tools like Figma or Adobe XD) into responsive and accessible web pages using HTML and CSS. Create user-friendly interfaces with attention to design, accessibility, and responsiveness.",
  },
  {
    id: 4,
    title: "State Management with Redux Toolkit",
    description: "Manage complex application state using Redux Toolkit to ensure smooth data flow and efficient updates.",
  },
  {
    id: 5,
    title: "API Integration & Data Handling",
    description: "Fetch and display data from APIs, handle asynchronous operations, and manage data caching for seamless backend integration.",
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Optimize React applications with lazy loading, code splitting, and other techniques to enhance performance and user experience.",
  },
];


const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              {/* <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
