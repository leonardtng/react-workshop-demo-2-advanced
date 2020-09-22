import React, { useState, useEffect } from 'react';
import './App.css';
import DataTable from './DataTable';
import axios from 'axios';

const initialCovidData = {
  confirmed: {
    value: 0,
  },
  recovered: {
    value: 0,
  },
  deaths: {
    value: 0,
  },
}

const App = () => {
  const [result, setResult] = useState(initialCovidData);
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState('Singapore');

  useEffect(() => {
    axios.get('https://covid19.mathdro.id/api/countries/' + country)
      .then((response) => {
        setResult(prev => (response.data));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [country])

  return (
    <div className="App">
      <header className="App-header">
        My Covid Data Table
      </header>
      <section>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
            <DataTable country={country} data={result} />
          )}
      </section>
      <div>
        <button onClick={() => setCountry('USA')}>
          Change to USA
      </button>
        <button onClick={() => setCountry('Singapore')}>
          Change to Singapore
        </button>
      </div>
    </div>
  );
}

export default App;
