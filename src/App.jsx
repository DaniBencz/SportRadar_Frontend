import './App.css';
import { useState, useEffect } from 'react';
import Stats from './components/TournamentsContainer';

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
      <header className="header" />
      <Stats stats={stats} />
    </div>
  );
}

export default App;
