import { useParams, Navigate  } from 'react-router-dom'
import CarouselLogement from '../../composants/CarouselLogement'
import InfosMediumLogement from '../../composants/InfosMediumLogement'
import InfosBasLogement from '../../composants/InfosBasLogement'
import { useFetch } from '../../utils/hooks'

function Logement() {
  const { indexLogement } = useParams()
  const indexLogementInt = parseInt(indexLogement)

  const { donnees, isLoading, erreur } = useFetch('../logements.json', indexLogementInt)
  if(erreur) { // Si chemin impossible, on revient à l'accueil avant d'aller plus loin
    return (
      <Navigate to="404" />
    )
  }
    
  return (
    <div>
      {isLoading ? (
        <div>Chargement des données…</div>
      ) : (
        <div>
      <CarouselLogement enrLogement={donnees} />
      <InfosMediumLogement enrLogement={donnees} />
      <InfosBasLogement enrLogement={donnees} />
      </div>
      )}
    </div>
  )
}
  
  export default Logement