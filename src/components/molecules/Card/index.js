import React from 'react'
import './styles.css'
import ModuleTitle from '../ModuleTitle'
import ModuleNumber from '../ModuleNumber'


const Card = (number,title) => {
  return (
    <div className="card__container">
      <ModuleNumber text={number} />
      <ModuleTitle text={title} />
    </div>
  )
}

export default Card