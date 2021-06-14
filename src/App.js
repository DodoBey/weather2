import './App.css';
import DailyWeather from './components/DailyWeather';
import WeeklyWeather from './components/WeeklyWeather';
import { Provider } from './components/Context';
import BGVideo from './components/BGVideo';


function App() {
  return (
    <Provider>
      <DailyWeather/>
      <WeeklyWeather/>
      <BGVideo/>
    </Provider>
  );
}

export default App;
