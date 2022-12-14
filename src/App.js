import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Home/Footer.js"
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import YourMenu from './YourMenu/YourMenu';
import CompleteRecipe from './Recipes/CompleteRecipe.js'
import './App.css';
import Meals from './Recipes/Meals'

function App() {

  return (
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Meals" element={<Meals />} />
              <Route path="/YourMenu" element={<YourMenu />} />
              <Route path="/CompleteRecipe" element={<CompleteRecipe />}/>
            </Routes>
          </Router>
        </div>
  );
}

export default App;
