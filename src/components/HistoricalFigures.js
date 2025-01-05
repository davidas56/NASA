// src/components/HistoricalFigures.js
import React, { useEffect, useState } from "react";
import figuresData from "../assets/json/assets2.json";

function HistoricalFigures() {
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    setFigures(figuresData.figures);
  }, []);

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Historical Figures in Space Exploration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {figures.map((figure, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="text-center">
                {/* Displaying image from the JSON */}
                <img
                  src={figure.image}
                  alt={figure.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-300"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {figure.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{figure.details}</p>
              </div>
              <div className="absolute inset-0 bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white p-6 rounded-lg">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-2">Details</h4>
                  <p className="text-sm">{figure.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HistoricalFigures;
