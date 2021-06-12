import './App.css';
import DailyWeather from './components/DailyWeather';
import { Provider } from './components/Context'

function App() {
  return (
    <Provider>
    <div className="App">
      <DailyWeather/>
    </div>
    </Provider>
  );
}

export default App;
