import React from 'react'
import './styles.css'

const Article = ({materia, aboutLink}) => {
  return (
    <div className="article">
    <div className="article__nametag">
      <h3>{materia}</h3>
    </div>
    <div className="article__container">
      <p className="article__text">{aboutLink}</p>
    </div>
  </div>
  )
}


export default Article