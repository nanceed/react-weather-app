import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="New York"/> 
      <footer>
        This project was coded by Nancy Duong and is open-sourced on
        <a href="https://github.com/nanceed/react-weather-app" target="_blank"> GitHub </a>
        </footer>
        </div>
    </div>
  );
}
