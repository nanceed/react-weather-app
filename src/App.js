import "./styles.css";

import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      
      <WeatherSearch />
      <footer>
        This project was coded by Nancy Duong and is open-sourced on
        <a href="https://github.com/nanceed/react-weather-app" target="_blank"> GitHub </a>
        </footer>
        </div>
    </div>
  );
}
