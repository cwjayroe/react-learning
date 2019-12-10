import React from 'react';
import CardList from 'components/cardList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const weatherItems = [
    {
      high: 99,
      low: 77,
      weather: "cloudy",
      day: "monday"
    },
    {
      high: 99,
      low: 77,
      weather: "cloudy",
      day: "tuesday"
    }
  ]

  return (
    <div className="App">
      <CardList weatherList={weatherItems} />
    </div>
  );
}

export default App;
