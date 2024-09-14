export const getImageOfTheDay = (url) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    return fetch(url, requestOptions) 
      .then((response) => response.json()) 
      .catch((error) => {
        console.error('Error fetching image of the day:', error);
        throw error;
      });
};

export const getAssetsFromNasa = (url) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    return fetch(url, requestOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error fetching assets of the day:', error);
            throw error;
          });};