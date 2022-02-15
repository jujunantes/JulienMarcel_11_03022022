function InfosMediumLogement(props) {
    const indexLogementInt = parseInt(props.index)
    return (
        <div className='conteneurInfosMediumLogement'>
            <div className="conteneurInfosMediumLogementGauche">
                <div className="InfosMediumLogementTitre">
                    {window.mesLogements[indexLogementInt].title}
                </div>
                <div className="InfosMediumLogementEndroit">
                    {window.mesLogements[indexLogementInt].location}
                </div>
                <div className="InfosMediumLogementTags">
                    {window.mesLogements[indexLogementInt].tags.map((tag,index) => {
                        return (
                            <span key={index}>
                                {tag}
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className="conteneurInfosMediumLogementDroite">
                <div className="conteneurInfosMediumLogementNomPhoto">
                    <div className="conteneurInfosMediumLogementNom">
                        {window.mesLogements[indexLogementInt].host.name}
                    </div>
                    <div className="conteneurInfosMediumLogementPhoto">
                        <img
                            className="stylePhotosNom"
                            src={window.mesLogements[indexLogementInt].host.picture}
                            alt={window.mesLogements[indexLogementInt].title + '- propriétaire : ' + window.mesLogements[indexLogementInt].host.name}
                            />
                    </div>
                </div>
                <div className="conteneurInfosMediumLogementEtoiles">
                    <span className="etoile-checked"></span>
                    <span className="etoile-checked"></span>
                    <span className="etoile-checked"></span>
                    <span className="etoile"></span>
                    <span className="etoile"></span>
                </div>
            </div>
        </div>
    )
}

export default InfosMediumLogement