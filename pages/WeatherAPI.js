const api = {
  key: process.env.NEXT_PUBLIC_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

export function searchLocation(location) {
  let url;
  if (!isNaN(location)) {
    // If input is a number, treat it as a zip code
    url = `${api.base}weather?zip=${location}&units=metric&appid=${api.key}`;
  } else {
    // If input is a string, treat it as a city name
    url = `${api.base}weather?q=${location}&units=metric&appid=${api.key}`;
  }

  return fetch(url)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      return result;
    });
}
