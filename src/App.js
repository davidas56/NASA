/* eslint-disable no-useless-concat */
/* eslint-disable no-use-before-define */
import React from 'react';
import Stack from 'react-stackai';
import Logo from './assets/nasa.png';
import backgroundImage from './assets/cover.jpg';
import { getImageOfTheDay, getAssetsFromNasa } from './services/asset-retrieve';

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
  const [dataAsset, setDataAsset] = React.useState([]);
  const [place, setPlace] = React.useState('Mars');
  const [assetD, setAssetD] = React.useState('Site map on mars');
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
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setAssetD(event.target.value);
  };
  const handleGetAssets = () => {
    var urlAsset = 'https://images-api.nasa.gov/search?q=' + place + '&description=' + assetD;

    console.log(urlAsset);

    getAssetsFromNasa(urlAsset)
      .then((data) => {
        if (data) {
          console.log(data.collection.items[0].links[0]);

          setDataAsset(data.collection.items);
        }
      })
      .catch((error) => {
        console.error('Error fetching assets from nasa', error);
      })
  };
  var url = 'https://api.nasa.gov/planetary/apod?api_key=erIg4PFZATj0ClX50knV6Pu4U2EczBlvTgKVAKjQ' + '&date=' + selectedDate;

  const trimText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return `${words.slice(0, maxWords).join(' ')}...`;
    }
    return text;
  };
  
  React.useEffect(() => {
    setLoading(true); 
    handleGetAssets();
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
    <div className="min-h-screen bg-transparent">
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
          <div>SOUND OF SPACE</div>
        </div>
        <div>
          <input
          type="text"
          placeholder="Place..."
          value={place} 
          onChange={handlePlaceChange} 
          className="p-1 rounded-lg border border-gray-300 mx-2"
          />
          <input
            type="text"
            placeholder="Description..."
            value={assetD} 
            onChange={handleDescriptionChange} 
            className="p-1 rounded-lg border border-gray-300 mx-2"
          />
          <button class="p-1 bg-blue-400 hover:bg-blue-700 text-white font-bold mx-2.5 rounded capitalize" onClick={handleGetAssets}>
            Get assets
          </button>          
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
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-inner">
            <img
              src={imageUrl?.length > 0 ? imageUrl : "https://via.placeholder.com/400"}
              alt={title}
              className="rounded-lg"
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-inner items-center">
            <h2 className="text-2xl font-bold mb-4 capitalize text-center">
              {title?.length > 0 ? title : 'Title'}
            </h2>
            <p className="text-gray-700 normal-case text-center">
              {description?.length > 0 ? description : 'Description'}
            </p>
            {/*  
            We need to add here the api of the sound
            */}
          </div>
        </div>
      )}

    {dataAsset?.length > 0 && <section className="bg-transparent">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="overflow-x-scroll scrollbar-hide">
          <div className="flex flex-nowrap space-x-8 ">
            {dataAsset?.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[300px] h-[250px] bg-white p-4 rounded-lg shadow-md overflow-hidden"
              >
              <h3 className="text-xl font-bold text-gray-900 mt-4 truncate capitalize ">
                {item.data[0].title}
              </h3>
              <p className="mt-2 text-gray-600 text-ellipsis overflow-hidden whitespace-nowrap">
                {trimText(item.data[0].description, 100)}
              </p>
              {/* <img
                src={item?.links[0].href}
                alt={item.data[0].title}
                className="rounded-lg"
              /> */}
              <p className="mt-1 text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap capitalize justify-items-center ">
                Date: {new Date(item.data[0].date_created).toLocaleDateString()}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>}
          {/* Footer */}
          <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 capitalize ">&copy; 2024 nasa sound of space™. All rights reserved.</p>
          
        </div>
      </footer>
  </div>
  );
}

export default App;
