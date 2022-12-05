import logo from './logo.svg';
import { ItemContextProvider } from './Context/ItemContextProvider';
import {RecipesContextProvider } from './Context/RecipesContextProvider';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./Home/Footer.js"
import Navbar from './Navbar/Navbar';
import RecipesList from './Recipes/RecipesList';
import Home from './Home/Home';
import YourMenu from './YourMenu/YourMenu';
import './App.css';

function App() {
 
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
      </ItemContextProvider> 
  </RecipesContextProvider>
  );
}

export default App;
/* 
{Object.keys(meal).map((key) => 
  <Dog ={key}
      subBreed={dogs[key]}/>)} */