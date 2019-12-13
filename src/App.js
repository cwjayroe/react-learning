import React from 'react';
import WeatherCardList from 'components/weatherCardList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <WeatherCardList city='Houston' />
    </div>
  );
}

export default App;
