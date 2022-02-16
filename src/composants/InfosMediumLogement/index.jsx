function InfosMediumLogement(props) {
    const indexLogementInt = parseInt(props.index)
    const nombreEtoiles = window.mesLogements[indexLogementInt].rating
    const nomPrenom = window.mesLogements[indexLogementInt].host.name.split(/(?<=^\S+)\s/)
    return (
        <div className='conteneurInfosMediumLogement'>
            <div className="conteneurInfosMediumLogementGauche col col-lg-7">
                <div className="InfosMediumLogementTitre">
                    {window.mesLogements[indexLogementInt].title}
                </div>
                <div className="InfosMediumLogementEndroit">
                    {window.mesLogements[indexLogementInt].location}
                </div>
                <div className="InfosMediumLogementTags">
                    {window.mesLogements[indexLogementInt].tags.map((tag,index) => {
                        return (
                            <span key={index} className="styleTag">
                                {tag}
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className="conteneurInfosMediumLogementDroite">
                <div className="conteneurInfosMediumLogementNomPhoto">
                    <div className="conteneurInfosMediumLogementNom">
                        <div>{nomPrenom[0]}</div>
                        <div>{nomPrenom[1]}</div>
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
                    {nombreEtoiles > 0 ? <span className="etoile-checked"></span> : <span className="etoile"></span>}
                    {nombreEtoiles > 1 ? <span className="etoile-checked"></span> : <span className="etoile"></span>}
                    {nombreEtoiles > 2 ? <span className="etoile-checked"></span> : <span className="etoile"></span>}
                    {nombreEtoiles > 3 ? <span className="etoile-checked"></span> : <span className="etoile"></span>}
                    {nombreEtoiles > 4 ? <span className="etoile-checked"></span> : <span className="etoile"></span>}
                </div>
            </div>
        </div>
    )
}

export default InfosMediumLogement