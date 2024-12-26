import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsantoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsantoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsantoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Header trocaTema={trocaTema} />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
