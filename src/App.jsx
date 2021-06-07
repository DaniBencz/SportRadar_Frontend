import './App.css';
import { useState, useEffect } from 'react';
import Stats from './components/TournamentsContainer';
import GitHub from './github.png';

function App() {
  const [stats, setStats] = useState({});

  const getResults = () => {
    fetch('/results')
      .then((res) => res.json())
      .then((res) => setStats(res))
      .catch();
  };

  useEffect(() => {
    getResults();
    setInterval(() => getResults(), 600 * 1000);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <a href="https://github.com/DaniBencz/SportRadar_Backend" target="_blank" rel="noreferrer">
          <img className="github-icon" src={GitHub} alt="link to GitHub" />
        </a>
      </header>
      <Stats stats={stats} />
    </div>
  );
}

export default App;
