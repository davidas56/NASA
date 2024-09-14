/* eslint-disable no-useless-concat */
/* eslint-disable no-use-before-define */
import React from 'react';
import Stack from 'react-stackai';
import Logo from './assets/nasa.png';
import backgroundImage from './assets/cover.jpg';
import { getImageOfTheDay } from './services/asset-retrieve';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Song Of Space', href: '#' },
];

function App() {

  const [imageUrl, setImageUrl] = React.useState('');
  const [title, setTitle] = React.useState('Image title');
  const [description, setDescription] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const getYesterdayDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Subtract one day
    return yesterday.toISOString().split('T')[0];
  };
  const [selectedDate, setSelectedDate] = React.useState(getYesterdayDate());
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  var url = 'https://api.nasa.gov/planetary/apod?api_key=erIg4PFZATj0ClX50knV6Pu4U2EczBlvTgKVAKjQ' + '&date=' + selectedDate;

  console.log(url);

  React.useEffect(() => {
    setLoading(true); 
    getImageOfTheDay(url)
      .then((data) => {
        console.log(data);
        if (data) {
          setImageUrl(data.url);            
          setTitle(data.title);            
          setDescription(data.explanation); 
        }
      })
      .catch((error) => {
        console.error('Error fetching image of the day:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return (
    <div className="min-h-screen bg-gray-100">
      <Stack project="https://www.stack-ai.com/embed/34027e59-d065-4342-9eb1-6c96f5218eaa/10c156b0-cfb7-41b2-bc2e-33e047d89cc1/66def1885458b85d66c68a2d" />
    {/* Navbar */}
    <nav className="relative p-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Content */}
      <div className="relative container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold flex flex-row justify-center items-center">
          <img src={Logo} alt="Logo" className="w-16 h-16 object-contain" />
          <div>NASA SOUND OF SPACE</div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Place..."
            className="p-1 rounded-lg border border-gray-300 mx-2"
          />
          <input
            type="text"
            placeholder="Description..."
            className="p-1 rounded-lg border border-gray-300 mx-2"
          />
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="p-1 rounded-lg border border-gray-300 mx-2"
          />
        </div>
      </div>
    </nav>

    {/* Dividir la pantalla en dos partes */}
    {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl font-bold">Loading...</div>
        </div>
      ) : (
        <div className="container mx-auto mt-8 grid grid-cols-2 gap-4">
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
            <img
              src={imageUrl?.length > 0 ? imageUrl : "https://via.placeholder.com/400"}
              alt={title}
              className="rounded-lg"
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              {title?.length > 0 ? title : 'Title'}
            </h2>
            <p className="text-gray-700">
              {description?.length > 0 ? description : 'Description'}
            </p>
          </div>
        </div>
      )}
  </div>
  );
}

export default App;
