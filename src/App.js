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
  const [result, setResult] = useState({world: initialCovidData, singapore: initialCovidData});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://covid19.mathdro.id/api')
    .then((response) => {
      setResult(prev => ({...prev, world: response.data}));
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log('[WORLD] Unexpected Error'); // This always runs
    });
    axios.get('https://covid19.mathdro.id/api/countries/singapore')
      .then((response) => {
        setResult(prev => ({...prev, singapore: response.data}));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log('[SINGAPORE] Unexpected Error');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        My Covid Data Table
      </header>
      <section>
        {isLoading ? (
            <span>Loading...</span>
        ) : (
            <DataTable data={result} />
          )}
      </section>
    </div>
  );
}

export default App;
