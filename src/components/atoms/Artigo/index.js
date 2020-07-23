import React from 'react'
import './styles.css'

const Artigo = ({ sobreLink, link, tag }) => {
  return (
    <div className="artigo">
      <a href={link} target="_blank" className="artigo__texto">
        <div className="artigo__tag">
          <h3>{tag}</h3>
        </div>
        <div className="artigo__container">
          <p className="artigo__texto">{sobreLink}</p>
        </div>
      </a>
    </div>
  )
}


export default Artigo