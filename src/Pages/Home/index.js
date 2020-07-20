import React from 'react'
import GeneralTemplate from '../../GeneralTemplate'
import illustration from "../../assets/calma-img.png"
// import TitleSections from '../../components/atoms/TitleSections'
import AboutSection from '../../components/organisms/AboutSection'
import CardsSection from '../../components/organisms/CardsSection'
import Header from '../../components/organisms/Header'

const Home = () => {
  return (
    <GeneralTemplate>
      <div>
        <Header />
        <AboutSection />
        <CardsSection />
      </div>
    </GeneralTemplate>
  )
}

export default Home;