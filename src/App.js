import React, { useState, useEffect, Fragment } from 'react';
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
    .then(function (response) {
      setResult(prev => ({...prev, world: response.data}));
      setIsLoading(false);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log('[WORLD] Unexpected Error');
    });
    axios.get('https://covid19.mathdro.id/api/countries/singapore')
      .then(function (response) {
        setResult(prev => ({...prev, singapore: response.data}));
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
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
          <Fragment>
            <span>Loading...</span>
          </Fragment>
        ) : (
            <DataTable data={result} />
          )}
      </section>
    </div>
  );
}

export default App;
