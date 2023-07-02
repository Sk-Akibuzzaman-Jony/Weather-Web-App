import { useState } from "react";
import { searchLocation } from "./WeatherAPI";
import PrintWeatherData from "./PrintWeatherData";

export default function Home() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [cityNotFound, setCityNotFound] = useState(false);
  const [apiError, setApiError] = useState(false);

  const searchPressed = () => {
    searchLocation(search)
      .then((result) => {
        if (result.cod === "404") {
          setApiError(false);
          setCityNotFound(true);
          setWeather({});
        } else {
          setApiError(false);
          setCityNotFound(false);
          setWeather(result);
        }
      })
      .catch((error) => {
        console.error(error);
        setWeather({});
        setApiError(true);
      });
  };

  return (
    <div className="App">
      {/* Search Box - Input + Button  */}
      <div className="flex justify-center items-center h-screen">
        <h1 className="font-sans text-4xl font-bold text-gray-800 mb-10">
          Weather App
        </h1>
        <div className="relative">
          <input
            type="text"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Enter State/City/Zip"
            required
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={searchPressed}
          >
            Submit
          </button>
        </div>
        {cityNotFound ? (
          <div className="mt-8">
            <p className="text-red-500 error-message">City not found</p>
          </div>
        ) : apiError ? (
          <div className="mt-8">
            <p className="text-red-500 error-message">API call failed</p>
          </div>
        ) : typeof weather.main !== "undefined" ? (
          <PrintWeatherData weather={weather} /> //Printing the weather data
        ) : null}
      </div>
    </div>
  );
}
