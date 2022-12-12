import { useState, useEffect } from 'react';
import axios from 'axios';
import './Countries.css';
//import {} from '../../area'






const Countries = ({onClickCountry}) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountriesData = async () => {
        const respCountries = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        setCountries(respCountries.data.meals);
    }
    getCountriesData();
  }, []);
  console.log(countries)
  return (

      <div classame='Countries'>
        {countries.map((country) => 
              <div>
                <img width='30px' src={`${country.strArea}.png`} alt="Not exist" />
                <button onClick={() => onClickCountry(country.strArea)}  className='clickable' >
                    {country.strArea}
                </button>
              </div>
            )}    
      </div>

  )
}
export default Countries