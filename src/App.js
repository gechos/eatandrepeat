import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
            <Route path="/Recipes" element={<RecipesList/>}/>
            <Route path="/YourMenu" element={<YourMenu/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;