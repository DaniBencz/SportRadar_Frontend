import banner from './banner.jpg';
import './App.css';
import { useState, useEffect } from 'react';
import Stats from './components/Stats';

function App() {
  const [stats, setStats] = useState({});

  const getStats = () => {
    fetch(`${window.location.origin}/matches`)
      .then(res => res.json())
      .then(stats => setStats(stats))
      .catch();
  };

  useEffect(() => {
    getStats();
    setInterval(() => getStats(), 600 * 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} style={{ width: "500px"}} alt="sportradar banner"/>
      </header>
      <Stats stats={stats}></Stats>
    </div>
  );
}

export default App;
