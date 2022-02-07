import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoStyle = styled.img`
  height: 70px;
`

const ConteneurNavigation = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LienStylise = {
    padding : "10px 15px",
    color: "#ff6060",
    textDecoration: "none",
    fontSize: "34px",
    textAlign: "center"
  }

function EnTete() {
    return (
    <ConteneurNavigation>
        <Link to="/">
            <LogoStyle src={require('../../medias/LogoKasa.png')} />
        </Link>
        <div>
            <Link to='/' style={LienStylise}>Accueil</Link>
            <Link to='/apropos' style={LienStylise}>A Propos</Link>
        </div>
    </ConteneurNavigation>
    )
}

export default EnTete