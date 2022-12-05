import axios from 'axios';
import { useState,useEffect } from 'react';
import './Search.css';


export default function FreeSolo() {
  const [search, setSearch] = useState([])
  const[input, setInput] = useState("")

  useEffect(() => {
    const getSearchData = async () => {
      const respSearch = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      setSearch(respSearch.data.meals[0]);
    }
    getSearchData();
  }, []);
  return (
   <div className="search">
      <input type="text" className="search-container" placeholder="Search"/>
      <button type="submit" className="search-button">
        <ion-icon className="icon" name="search-outline"></ion-icon>
      </button>
  </div>)};

/* import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  const [search, setSearch] = useState([])
  const[input, setInput] = useState("")

  useEffect(() => {
    const getSearchData = async () => {
      const respSearch = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      setSearch(respSearch.data.meals);
      console.log(respSearch.data.meals)
    }
    getSearchData();
  }, []);
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={search.map((key) => key.id)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
    </Stack>
  );
} */

