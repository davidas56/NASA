import React from 'react';
import Stack from 'react-stackai';


const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Song Of Space', href: '#' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Stack project="https://www.stack-ai.com/embed/34027e59-d065-4342-9eb1-6c96f5218eaa/10c156b0-cfb7-41b2-bc2e-33e047d89cc1/66def1885458b85d66c68a2d" />
    {/* Navbar */}
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">NASA PROJECT</div>
        <div>
          <input
            type="text"
            placeholder="Buscar..."
            className="p-2 rounded-lg border border-gray-300"
          />
        </div>
      </div>
    </nav>

    {/* Dividir la pantalla en dos partes */}
    <div className="container mx-auto mt-8 grid grid-cols-2 gap-4">
      {/* Primera columna - Imagen */}
      <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/400"
          alt="Placeholder"
          className="rounded-lg"
        />
      </div>

      {/* Segunda columna - Título y Descripción */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Title</h2>
        <p className="text-gray-700">
          Descrition
        </p>
      </div>
    </div>
  </div>
  );
}

export default App;
