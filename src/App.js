import logo from './logo.svg';
import { ItemContextProvider } from './Context/ItemContextProvider';
import { RecipesContextProvider } from './Context/RecipesContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Home/Footer.js"
import Navbar from './Navbar/Navbar';
import RecipesList from './Recipes/RecipesList';
import Home from './Home/Home';
import YourMenu from './YourMenu/YourMenu';
import './App.css';
import Meals from './Recipes/Meals'

function App() {

  return (
    <RecipesContextProvider>
      <ItemContextProvider>
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Meals" element={<Meals />} />
              <Route path="/YourMenu" element={<YourMenu />} />
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