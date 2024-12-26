import styled from 'styled-components'

export const Cabecalho = styled.header`
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`

export const BotaoTema = styled.button`
  border: 1px solid ${(props) => props.theme.corPrincipal};
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  padding: 8px;
  transition: all ease 0.3s;
  border-radius: 8px;
  margin-top: 8px;
  cursor: pointer;
`
