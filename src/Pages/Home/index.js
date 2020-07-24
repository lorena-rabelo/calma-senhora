import React from 'react'
import GeneralTemplate from '../../GeneralTemplate'
import SobreSecao from '../../components/organisms/SobreSecao'
import ModulosSecao from '../../components/organisms/ModulosSecao'
import Header from '../../components/organisms/Header'
import ColaboreSecao from '../../../src/components/organisms/ColaboreSecao'

const Home = () => {
  return (
    <GeneralTemplate>      
        <Header />       
        <SobreSecao />
        <ModulosSecao />  
        <ColaboreSecao />    
    </GeneralTemplate>
  )
}

export default Home;