import React from 'react'
import GeneralTemplate from '../../GeneralTemplate'
import illustration from "../../assets/calma-img.png"
import TitleSections from '../../Components/TitleSections'
import Card from '../../../src/Components/Card'

const Home = () => {
  return (
    <GeneralTemplate>
      <div>
        <header>
          <img alt="ilustração mulher com megafone em direção ao título" src={illustration}></img>
          <div>
            <h1>Calma, senhora</h1>
            <p>oooo o oooooooooo ooooooooooo oooooooooo oooooooooooo ooooooo</p>
          </div>
        </header>
        <section>
          <TitleSections
            texto="Sobre" />
          <p>
          O projeto consiste em uma plataforma de estudo, que segue o roteiro do bootcamp de front-end da <a href="https://reprograma.com.br/">{`{reprograma}`}</a>, para alunas do bootcamp conseguirem acessar um material de apoio direto, através de vídeos e artigos, e também pessoas que não tenham passado no processo seletivo (ou não poderiam fazê-lo) tenham acesso ao roteiro e alternativas de onde consumir esse conteúdo. 
          </p>
        </section>
        <section>
          <TitleSections
            texto="Guia de Estudos" />
            <Card />
        </section>
      </div>
    </GeneralTemplate>
  )
}

export default Home;