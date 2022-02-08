import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Chiffre404 = styled.p`
  margin-top: 10%;
  font-size: 20vw;
  font-weight: 700;
  color: #ff6060;
  text-align: center;
`

const Message404 = styled.p`
  color: #ff6060;
  text-align: center;
  font-size: 2.5vw;
  font-weight: 500;
  margin-bottom: 10%;
`

const LienStylise = {
    color: "#ff6060",
    display: "block",
    fontSize: "1.3vw",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: "30%"
  }

function Erreur404() {
    return (
    <div>
        <Chiffre404>404</Chiffre404>
        <Message404>Oups! La page que vous demandez n'existe pas.</Message404>
        <Link to='/' style={LienStylise}>Retourner sur la page d'accueil</Link>
    </div>)
  }
  
  export default Erreur404