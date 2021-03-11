const { fetchBreedDescription } = require('./breedFetcher');


let breeds = process.argv.slice(2);
const breedName = breeds[0];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});