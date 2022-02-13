import styled from 'styled-components'

const ImageBanniere = styled.img`
  width: 100%;
`

const MaBanniere = styled.div`
    width: 100%;
    margin-bottom: 47px;
`

function Banniere(props) {
    return (
    <MaBanniere>
        <ImageBanniere src={require('../../medias/' + props.image + '.png')} />
    </MaBanniere>
    )
}

export default Banniere