import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoStyle = styled.img`
  height: 70px;
`

const ConteneurNavigation = styled.nav`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LienStylise = {
    padding : "10px 15px",
    color: "#ff6060",
    textDecoration: "none",
    fontSize: "24px",
    fontWeight: "500",
    textAlign: "center",
    marginLeft: "30px"
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