import React from 'react'
import './styles.css'
import ModuleTitle from '../../atoms/ModuleTitle'
import ModuleNumber from '../../atoms/ModuleNumber'


const Card = (number,title) => {
  return (
    <div className="card__container">
      <ModuleNumber text={number} />
      <ModuleTitle text={title} />
    </div>
  )
}

export default Card