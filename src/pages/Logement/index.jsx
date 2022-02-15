import { useParams, Navigate  } from 'react-router-dom'
import CarouselLogement from '../../composants/CarouselLogement'
import InfosMediumLogement from '../../composants/InfosMediumLogement'
import { unLogement } from '../../utils/logement.js'
import donnees from '../Accueil/logements.json'

function Logement() {
  const { indexLogement } = useParams()
  const indexLogementInt = parseInt(indexLogement)
  if((indexLogementInt < 0) || (indexLogementInt > 19)) { // Si chemin impossible, on revient à l'accueil avant d'aller plus loin
    return (
      <Navigate to="/" />
    )
  }
  if (window.mesLogements.length === 0) { // Pour le cas où l'on arrive sur cette page par lien direct (les données n'ont alors pas été chargées)
    for (const logement of donnees.logements) {
      window.mesLogements.push( new unLogement(logement.id, logement.title, logement.cover, logement.pictures, logement.description, logement.host, logement.rating, logement.location, logement.equipements, logement.tags))
    }
  }
    
  return (
    <div>
      <CarouselLogement index={indexLogement} />
      <InfosMediumLogement index={indexLogement} />
    </div>
  )
}
  
  export default Logement