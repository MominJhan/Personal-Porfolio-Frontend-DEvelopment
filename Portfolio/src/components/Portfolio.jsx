import React from "react";
import TicTacToe from "../assets/tictactoee.png";
import Whatsapp from "../assets/maxresdefault.jpg";
import snakegame from "../assets/sn4ke.png";
import calculator from "../assets/calculat.jpg"; // Replace with your image path
import stopwatch from "../assets/stopwatch.gif"; // Replace with your image path
import expensetracker from "../assets/expensetracker.png"; // Replace with your image path

const projects = [
  {
    id: 1,
    name: 'Tic Tac Toe',
    image: TicTacToe,
  },
  {
    id: 2,
    name: "ChatApp",
    image: Whatsapp, 
  },
  {
    id: 3,
    name: 'SnaKe Game',
    image: snakegame,
  },
  {
    id: 4,
    name: 'Calculator',
    image: calculator,
  },
  {
    id: 5,
    name: 'Stop Watch',
    image: stopwatch,
  },
  {
    id: 6,
    name: 'Expense Tracker',
    image: expensetracker,
  },
];

const Portfolio = () => {
  return (
    <div className="bg-black text-white py-20" id="porfolio">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Latest Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
