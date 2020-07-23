import React from 'react'
import GeneralTemplate from '../../GeneralTemplate'
import SobreSecao from '../../components/organisms/SobreSecao'
import ModulosSecao from '../../components/organisms/ModulosSecao'
import Header from '../../components/organisms/Header'

const Home = () => {
  return (
    <GeneralTemplate>      
        <Header />
        <SobreSecao />
        <ModulosSecao />      
    </GeneralTemplate>
  )
}

export default Home;