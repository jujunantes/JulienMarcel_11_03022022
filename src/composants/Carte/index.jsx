import { Link } from 'react-router-dom'

function Carte(props) {
    return (
        <div className="mt-5 col-12 col-lg-4 carteLogement">
            <Link to={"/logement/" + props.index}>
                <img src={props.lien} className="stylePhotosLogement" alt="couverture du logement" />
                <div className="basGauche">{props.titre}</div>
            </Link>
        </div>
    )
}

export default Carte