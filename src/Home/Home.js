import RecipesHome from '../Recipes/RecipesHome';
import HomeCarousel from './HomeCarousel';

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <HomeCarousel/>
      <RecipesHome/>
    </div>
  )
}

export default Home