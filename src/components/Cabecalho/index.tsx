//import styles from './Cabecalho.module.css'
import { BotaoTema } from './styles'
import { Cabecalho as CabecalhoSite } from './styles'

const Cabecalho = () => (
  <CabecalhoSite>
    <h1>EBAC Jobs</h1>
    <BotaoTema>Trocar tema</BotaoTema>
  </CabecalhoSite>
)

export default Cabecalho
