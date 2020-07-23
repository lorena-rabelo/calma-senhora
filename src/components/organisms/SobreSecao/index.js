import React from 'react'
import TituloSecao from '../../atoms/TituloSecao'
import './styles.css'

const SobreSecao = ({ texto }) => {
  return (
    <section className="sobreSecao" id="sobre">
      <div className="sobreSecao__container">
        <TituloSecao
          texto="Sobre" />
        <p>
          O projeto consiste em uma plataforma de estudo, que segue o roteiro do bootcamp de front-end da 
          <b> Reprograma </b>para alunas do bootcamp conseguirem acessar um material de apoio direto, através de vídeos e artigos, e também pessoas que não tenham passado no processo seletivo (ou não poderiam fazê-lo) tenham acesso ao roteiro e alternativas de onde consumir esse conteúdo.          
          </p>
      </div>
    </section>
  )
}

export default SobreSecao