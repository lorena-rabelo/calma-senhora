import React from 'react'
import GeneralTemplate from '../../GeneralTemplate'
import AboutSection from '../../components/organisms/AboutSection'
import CardsSection from '../../components/organisms/CardsSection'
import Header from '../../components/organisms/Header'

const Home = () => {
  return (
    <GeneralTemplate>
      
        <Header />
        <AboutSection />
        <CardsSection />
      
    </GeneralTemplate>
  )
}

export default Home;