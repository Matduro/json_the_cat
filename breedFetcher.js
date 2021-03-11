const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
  // console.log(body);
  // console.log(typeof body);

    if (error) {
      callback(`Failed request: ${error}`, null);
      return null;
    }
    if (response.statusCode !== 200) {
      callback('Server responded with:' + response.statusCode, null);
      return;
    }

    const data = JSON.parse(body);
    // console.log(data);

    const breed = data[0];
    if (breed) {
      callback(null, breed.description.trim());
    } else {
      callback(`Failed to find ${breedName}`, null);
    }
  });

};



module.exports = { fetchBreedDescription };