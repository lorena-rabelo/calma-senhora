import React from 'react'
import './styles.css'
import ModuleTitle from '../../atoms/ModuleTitle'
import ModuleNumber from '../../atoms/ModuleNumber'
import Article from '../../atoms/Article/'

 const Card = ({ number, nomeModulo, onClick, id}) => {
  return (    
      <div className="card__container" onClick={onClick} key={id}>
        <ModuleNumber number={number} />
        <ModuleTitle nomeModulo={nomeModulo}
        />
      </div> 
  )
}

export default Card