import React from 'react'
import RecipesHome from '../Recipes/RecipesHome'
import Header from '../Header/Header'
import HomeCarousel from './HomeCarousel'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <HomeCarousel/>
      <RecipesHome/>
      <Footer />
    </div>
  )
}

export default Home