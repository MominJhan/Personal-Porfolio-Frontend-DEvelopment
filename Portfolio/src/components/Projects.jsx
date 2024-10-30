import React from "react";
import quizapp from "../assets/QuizApp.webm";
import ecommereceweb from "../assets/Ecomerece website.webm";
import accountmanagement from "../assets/Ecomerece Account Management.webm";

const projects = [
  { 
    id: 1, 
    name: 'Quiz App', 
    image: quizapp,
    githubLink: "https://github.com/MominJhan/quiz-app" // GitHub link
  },
  { 
    id: 2, 
    name: "Ecommerce Website", 
    image: ecommereceweb,
    githubLink: "https://github.com/MominJhan/E-comerece-website-in-react-js" // GitHub link
  },
  { 
    id: 3, 
    name: 'Account Management System', 
    image: accountmanagement,
    githubLink: "https://github.com/MominJhan/Ecomerece-Account-Management-System" // GitHub link
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              {project.image.endsWith(".webm") ? (
                <video
                  src={project.image}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                  controls
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
              )}
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <div className="flex justify-center p-2">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button type="button" className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
                    transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                    GitHub Link
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
