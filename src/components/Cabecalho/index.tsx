//import styles from './Cabecalho.module.css'
import { BotaoTema } from './styles'
import { Cabecalho as CabecalhoSite } from './styles'

type Props = {
  trocaTema: () => void
}

const Cabecalho = (props: Props) => (
  <CabecalhoSite>
    <h1>EBAC Jobs</h1>
    <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
  </CabecalhoSite>
)

export default Cabecalho
