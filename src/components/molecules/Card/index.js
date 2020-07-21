import React from 'react'
import './styles.css'
import ModuleTitle from '../../atoms/ModuleTitle'
import ModuleNumber from '../../atoms/ModuleNumber'


const Card = ({number,nomeModulo,onClick,index}) => {
  return (
    <div className="card__container" onClick = {onClick} key={index}>
      <ModuleNumber number={number} />
      <ModuleTitle nomeModulo={nomeModulo} 
      />
      
    </div>
  )
}

export default Card