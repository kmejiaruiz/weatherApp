import React from "react";
const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <div className="card-header">
        <div>
          <p className="weather-city">
            {weather ? weather.name + " " + weather.sys.country : "-"}
          </p>
          <p className="weather-descripton">
            {weather ? weather.weather[0].description : "unknown"}
          </p>
        </div>
        <img
          src={`icons/${weather ? weather.weather[0].icon : "unknown"}.png`}
          alt={"weather"}
          className={"weather-icon"}
        />
      </div>
      <div className="card-body">
        <h2 className="weather-temp">
          {weather ? Math.round(weather.main?.temp - 273.15) : ""}°C
        </h2>
        <div className="weather-details">
          <div className="parameters">
            <span className="param-label">Details:</span>
          </div>
          <div className="parameters">
            <span className="param-label">Feels like:</span>
            <span className="param-val">
              {weather ? (weather.main?.feels_like - 273.15).toFixed(2) : "-"}
            </span>
          </div>
          <div className="parameters">
            <span className="param-label">Humidity:</span>
            <span className="param-val">
              {weather ? weather.main?.humidity : "-"} %
            </span>
          </div>
          <div className="parameters">
            <span className="param-label">Pressure:</span>
            <span className="param-val">
              {weather ? weather.main?.pressure : "-"} hPs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard
