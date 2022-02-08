import Container from 'react-bootstrap/Container'

const PolicePage = {
    fontFamily: "Montserrat"
}

function Disposition(props) {
  return (
      <Container style={PolicePage}>
          {props.children}
      </Container>
  )
}

export default Disposition