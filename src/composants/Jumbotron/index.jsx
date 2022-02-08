import styled from 'styled-components'

const ImageJumbotron = styled.img`
  width: 100%;
`

const MonJumbo = styled.div`
    width: 100%;
    margin-bottom: 47px;
`

function Jumbotron(props) {
    return (
    <MonJumbo>
        <ImageJumbotron src={require('../../medias/' + props.image + '.png')} />
    </MonJumbo>
    )
}

export default Jumbotron