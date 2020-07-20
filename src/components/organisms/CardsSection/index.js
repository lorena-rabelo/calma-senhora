import React, { Component } from 'react'
import Card from '../../molecules/Card'
import TitleSections from '../../atoms/TitleSections'
import './styles.css'

const CardsSection = ({number, title}) => {
      return (
      <div className="section__cards">
        <TitleSections
          texto="Guia de Estudos" />
        <div className="cardSection-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    )
  }


export default CardsSection