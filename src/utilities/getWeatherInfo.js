
// https://dmitripavlutin.com/javascript-fetch-async-await/
//https://selvaganesh93.medium.com/how-to-clean-up-subscriptions-in-react-components-using-abortcontroller-72335f19b6f7

export async function getWeather(pos) {
  const APIKEY = 'cbc8360ec4365e78548c3b0ddb5b76c4';
  const url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + pos.latitude + "&lon=" + pos.longitude + "&exclude={part}&appid=" + APIKEY + "&units=metric";
  /* const response = await fetch(url);
  const weather = await response.json(); */

  const axios = require('axios');
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  try {
    const response = await axios
      .get(url, { cancelToken: source.token });
      console.log(response.data)
      return response.data;
  } catch (error) {
    console.error(error);
  }

  return() => {
    source.cancel();
  }
  // return weather;
}