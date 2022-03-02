import './App.css';
import WeatherPage from './Components/WeatherPage/WeatherPage';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <WeatherPage getState={props.getState} />
    </div>
  );
};

export default App;
