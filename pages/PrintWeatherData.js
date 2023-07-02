const PrintWeatherData = ({ weather }) => {
    // Calculation for sunrise and sunset
    const sunriseTimestamp = weather.sys.sunrise * 1000; // Convert to milliseconds
    const sunsetTimestamp = weather.sys.sunset * 1000; // Convert to milliseconds
  
    // Function to format a timestamp to local time string
    const formatTimestampToLocalTime = (timestamp) => {
      const date = new Date(timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };
  
    
    const sunriseTime = formatTimestampToLocalTime(sunriseTimestamp);
    const sunsetTime = formatTimestampToLocalTime(sunsetTimestamp);
  
    // Get the weather icon URL
    let iconURL = "";
    if (typeof weather.weather !== "undefined") {
      const icon = weather.weather[0].icon;
      iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }
  
    return (
      <div className="weather-data-container">
        <div className="mt-8 grid grid-cols-2 gap-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <th className="py-2 px-4 border-b">Location</th>
                <td className="py-2 px-4 border-b">{weather.name}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b">Temperature</th>
                <td className="py-2 px-4 border-b">{weather.main.temp}°C</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b">Condition</th>
                <td className="py-2 px-4 border-b">
                  {weather.weather[0].main}
                </td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b">Description</th>
                <td className="py-2 px-4 border-b">
                  {weather.weather[0].description}
                </td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b">Humidity</th>
                <td className="py-2 px-4 border-b">
                  {weather.main.humidity}%
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <th className="py-2 px-4 border-b">Wind Speed</th>
                <td className="py-2 px-4 border-b">{weather.wind.speed} km/h</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b">Pressure</th>
                <td className="py-2 px-4 border-b">
                  {weather.main.pressure} hPa
                </td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b">Visibility</th>
                <td className="py-2 px-4 border-b">
                  {weather.visibility} m
                </td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b">Sunrise</th>
                <td className="py-2 px-4 border-b">{sunriseTime}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border-b">Sunset</th>
                <td className="py-2 px-4 border-b">
                  {sunsetTime}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <img
          src={iconURL}
          alt="Weather Icon"
          style={{ display: 'block', margin: '0 auto' }}
          className="weather-icon"
        />
      </div>
    );
  };
  
  export default PrintWeatherData;
  