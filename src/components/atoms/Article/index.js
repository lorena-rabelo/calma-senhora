import React from 'react'
import './styles.css'

const Article = ({ aboutLink, link, tag }) => {
  return (
    <div className="article">
      <div className="article__nametag">
        <h3>{tag}</h3>
      </div>
      <div className="article__container">
        <a href={link} target="blank" className="article__text">{aboutLink}</a>
      </div>
    </div>
  )
}


export default Article