export async function getLocation(pos){
    const APIKEY = 'AIzaSyD5NNdEZZM2mZGCPhP7AH_GciXam0m2hd4';
    const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + pos.latitude + "," + pos.longitude + "&key=" + APIKEY;
    /* const response = await fetch(url);
    const weather = await response.json(); */
  
    const axios = require('axios');
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
  
    try {
      const response = await axios
        .get(url, { cancelToken: source.token });
        console.log(url);

        const results = response.data.results;
        for(var i = 0; i < results.length; i++){
          var addComp = results[i].address_components;
          for(var j = 0; j < addComp.length; j++){
            if(addComp[j].types.includes("locality")){
              return addComp[j].long_name;
            }
          }
        } 
        //console.log(response.data.results[5].address_components[0].long_name);
        //return response.data.results[0].address_components[2].long_name;
    } catch (error) {
      console.error(error);
    }
  
    return() => {
      source.cancel();
    }
    // return weather;
  }