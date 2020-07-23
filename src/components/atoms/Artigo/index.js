import React from 'react'
import './styles.css'

const Artigo = ({ sobreLink, link, tag }) => {
  return (
    <div className="artigo">
      <div className="artigo__tag">
        <h3>{tag}</h3>
      </div>
      <div className="artigo__container">
        <a href={link} target="_blank" className="artigo__texto">{sobreLink}</a>
      </div>
    </div>
  )
}


export default Artigo