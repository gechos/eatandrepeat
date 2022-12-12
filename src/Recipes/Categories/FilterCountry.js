import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '././Filter.css'

const FilterCountry = ({ setFiltered, recip }) => {
    const [countryName, setCountryName] = useState('')
    const [country, setCountry] = useState([])

    useEffect(() => {
        const getCountryData = async () => {
            const respCountry = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            setCountry(respCountry.data.meals);
            console.log(respCountry.data.meals)
        }
        getCountryData();
    }, []);


    useEffect(() => {
        const filtering = recip.filter((key) =>
            key.strArea?.includes(countryName));

        setFiltered(filtering);
        console.log(filtering);
        console.log(countryName)
    }, [countryName]);

    return (
        <div className='filter'>
            <h4>Countries</h4>
            <div className='filter-container'>
                <select className='filter-box' onChange={(e) => setCountryName(e.target.value)} name="ingredient">
                    <option className='option'>Countries</option>
                    {country.map((key) =>
                        <option key={key.idIngredient} className='option' value={key.strArea}>{key.strArea}</option>
                    )}
                </select>
            </div>
        </div>
    )
}


export default FilterCountry