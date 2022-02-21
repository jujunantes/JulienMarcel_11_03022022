function Banniere(props) {
    return (
    <div className='divBanniere'>
        <img className='imageBanniere' src={require('../../medias/' + props.image + '.png')} alt='bannière' />
        <div className='texteCentre'>{props.texte}</div>
    </div>
    )
}

export default Banniere