import React from 'react'
import TitleSections from '../../atoms/TitleSections'
import './styles.css'

const AboutSection = ({ texto }) => {
  return (
    <section className="aboutSection">
      <div className="aboutSection__container">
        <TitleSections
          texto="Sobre" />
        <p>
          O projeto consiste em uma plataforma de estudo, que segue o roteiro do bootcamp de front-end da <a href="https://reprograma.com.br/">{`{reprograma},`}</a>para alunas do bootcamp conseguirem acessar um material de apoio direto, através de vídeos e artigos, e também pessoas que não tenham passado no processo seletivo (ou não poderiam fazê-lo) tenham acesso ao roteiro e alternativas de onde consumir esse conteúdo.
          </p>
      </div>
    </section>
  )
}

export default AboutSection