
import axios from 'axios'

const Repositorios = axios.create({ baseURL: 'https://my-json-server.typicode.com/lorena-rabelo/repositorios' })

export default Repositorios