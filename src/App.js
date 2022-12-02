import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';
import MediaCard from "./Recetas/cardItem.js";
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RecetasList from './Recetas/recetaslist';
import Home from './Home/Home';
import TuMenu from './Tu menú/TuMenu';

function App() {
  const [meal, setMeal] = useState([])

  useEffect(() => {
    const getMealData = async () => {
      const respMeal = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      setMeal(respMeal.data.meals[0]);
      console.log(respMeal.data.meals[0])
    }
    getMealData();
  }, []);

  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recetas" element={<RecetasList/>}/>
        <Route path="/tumenu" element={<TuMenu/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
/* 
{Object.keys(meal).map((key) => 
  <Dog ={key}
      subBreed={dogs[key]}/>)} */