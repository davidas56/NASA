// src/pages/TutorialPlanetaryOrbit.js
import React, { useEffect, useRef, useState } from "react";

const TutorialPlanetaryOrbit = () => {
  const steps = [
    "Step 1: Create the canvas where we will draw the simulation.",
    "Step 2: Define the planets with their properties (mass, distance, etc.).",
    "Step 3: Write functions to simulate the orbits of the planets.",
    "Step 4: Render the planets and their orbits on the canvas.",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const canvasRef = useRef(null);

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const sun = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 50,
      color: "yellow",
    };
    const earth = {
      x: canvas.width / 2 + 200,
      y: canvas.height / 2,
      radius: 15,
      color: "blue",
      angle: 0,
      speed: 0.01,
    };

    function drawSun() {
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
      ctx.fillStyle = sun.color;
      ctx.fill();
    }

    function drawEarth() {
      const earthX = sun.x + Math.cos(earth.angle) * 200;
      const earthY = sun.y + Math.sin(earth.angle) * 200;

      ctx.beginPath();
      ctx.arc(earthX, earthY, earth.radius, 0, Math.PI * 2);
      ctx.fillStyle = earth.color;
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      drawSun();
      drawEarth();

      earth.angle += earth.speed; // Move the earth

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Planetary Orbit Simulation Tutorial
      </h2>

      {/* Tutorial Steps */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">
          {steps[currentStep]}
        </h3>
        <div className="flex justify-between">
          <button
            onClick={handlePrevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Previous
          </button>
          <button
            onClick={handleNextStep}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="mb-8">
        <h4 className="text-xl text-white mb-4">Code Editor</h4>
        <textarea
          className="w-full h-72 p-4 rounded-lg border-2 border-gray-300"
          placeholder="Write your JavaScript code here..."
        />
      </div>

      {/* Canvas for the simulation */}
      <div>
        <canvas
          ref={canvasRef}
          className="w-full h-96 border-2 border-gray-300"
        />
      </div>
    </div>
  );
};

export default TutorialPlanetaryOrbit;
