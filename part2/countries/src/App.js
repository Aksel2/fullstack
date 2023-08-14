import { useState, useEffect } from 'react';
import Filter from './components/Filter'
import countriesService from './services/countries'
import Countries from './components/Countries';

function App() {
  const [filterCountry, setFilterCountry] = useState('')
  const [countries, setCountries] = useState([])
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])


  const handleFilterChange = (event) => {
    setFilterCountry(event.target.value)
  }

  return (
    <div>
      <Filter change={handleFilterChange} />
      <Countries countries={countries} filterCountry={filterCountry} api_key={api_key} />
    </div>
  );
}

export default App;
