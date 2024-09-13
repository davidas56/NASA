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
    <div className="bg-gray-100 min-h-screen">
      <Stack project="https://www.stack-ai.com/embed/34027e59-d065-4342-9eb1-6c96f5218eaa/10c156b0-cfb7-41b2-bc2e-33e047d89cc1/66def1885458b85d66c68a2d" />
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">NASA PROJECT</h1>
            </div>
            <nav className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Song of Space
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              This 
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Feature 1</h3>
              <p className="mt-2 text-gray-600">Description of Feature 1.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Feature 2</h3>
              <p className="mt-2 text-gray-600">Description of Feature 2.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Feature 3</h3>
              <p className="mt-2 text-gray-600">Description of Feature 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
