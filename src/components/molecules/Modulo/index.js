import React from 'react'
import './styles.css'
import ModuloNome from '../../atoms/ModuloNome'
import ModuloNumero from '../../atoms/ModuloNumero'


const Modulo = ({ numero, nomeModulo, onClick, id }) => {
  return (
    <>
      <div className= "modulo__container"  onClick={onClick} key={id}>
        <ModuloNumero numero={numero} />
        <ModuloNome nomeModulo={nomeModulo}
        />
      </div>    
    </>

  )
}

export default Modulo