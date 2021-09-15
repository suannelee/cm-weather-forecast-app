export async function getCoords(location){
    //var location = 'London';
    const APIKEY = 'AIzaSyD5NNdEZZM2mZGCPhP7AH_GciXam0m2hd4';
    const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=" + APIKEY;
    /* const response = await fetch(url);
    const weather = await response.json(); */
  
    const axios = require('axios');
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
  
    try {
      const response = await axios
        .get(url, { cancelToken: source.token });
        console.log("Entering new location");
        return response.data.results[0].geometry.location;
    } catch (error) {
      console.error(error);
    }
  
    return() => {
      source.cancel();
    }
    // return weather;
  }