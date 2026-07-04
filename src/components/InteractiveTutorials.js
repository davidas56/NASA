// src/components/InteractiveTutorials.js
import React from "react";
import { Link } from "react-router-dom";

// Define the list of tutorials with their respective details
const tutorials = [
  {
    id: "planetary-orbit",
    title: "Planetary Orbit Simulation (JavaScript)",
    description:
      "Learn how to simulate the planetary orbits using JavaScript and HTML5 Canvas.",
    link: "/tutorials/planetary-orbit",
  },
  {
    id: "nasa-data-visualization",
    title: "NASA Data Visualization (Python)",
    description:
      "Visualize NASA’s space exploration data using Python and libraries like Matplotlib and Pandas.",
    link: "/tutorials/nasa-data-visualization",
  },
  {
    id: "scratch-tutorial",
    title: "Interactive Space Simulation (Scratch)",
    description:
      "Create interactive space simulations using Scratch for beginners.",
    link: "/tutorials/scratch-space-simulation",
  },
];

function InteractiveTutorials() {
  return (
    <div className="text-white min-h-screen">
      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Interactive Coding Tutorials
        </h2>

        {/* Tutorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{tutorial.title}</h3>
              <p className="text-gray-600 mb-4">{tutorial.description}</p>
              <Link
                to={
                  tutorial.id === "planetary-orbit"
                    ? "/tutorial/planetary-orbit"
                    : tutorial.link
                }
                className="text-blue-500 hover:underline"
              >
                Start Tutorial
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InteractiveTutorials;
