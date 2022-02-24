function InfosMediumLogement(props) {
    const nombreEtoiles = props.enrLogement.rating
    const nomPrenom = props.enrLogement.host.name.split(/(?<=^\S+)\s/)
    return (
        <div className='conteneurInfosMediumLogement'>
            <div className="conteneurInfosMediumLogementGauche col col-lg-7">
                <div className="InfosMediumLogementTitre">
                    {props.enrLogement.title}
                </div>
                <div className="InfosMediumLogementEndroit">
                    {props.enrLogement.location}
                </div>
                <div className="InfosMediumLogementTags">
                    {props.enrLogement.tags.map((tag,index) => {
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
                            src={props.enrLogement.host.picture}
                            alt={props.enrLogement.title + '- propriétaire : ' + props.enrLogement.host.name}
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