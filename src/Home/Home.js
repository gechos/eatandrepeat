import React from 'react'
import RecetasHome from '../Recetas/RecetasHome'

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <HomeCarousel/>
      <Header />
      <RecipesHome/>
    </div>
  )
}

export default Home