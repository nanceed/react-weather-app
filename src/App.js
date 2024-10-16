import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="New York"/> 
      <footer>
        This project was coded by <a href="https://github.com/nanceed" target="_blank" rel="noopener noreferrer">Nancy Duong</a> and is open-sourced on
          <a href="https://github.com/nanceed/react-weather-app" target="_blank" rel="noopener noreferrer"> GitHub </a>and hosted on <a href="https://react-weather-app-nancyd.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>
        </footer>
        </div>
    </div>
  );
}
