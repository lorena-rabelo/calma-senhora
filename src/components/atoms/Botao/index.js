import React from 'react'
import { Link } from "react-scroll";
import './styles.css'

const Botao = ({ texto }) => {
  return (
    <Link to="roteiro" className="botao"><span>{texto}</span></Link>
  )
}
export default Botao