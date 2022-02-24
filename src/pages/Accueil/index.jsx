import Banniere from '../../composants/Banniere'
import Carte from '../../composants/Carte'
import { useFetch } from '../../utils/hooks'

function Accueil() {

  const { donnees, isLoading, erreur } = useFetch('logements.json')
  if (erreur) {
    return <div>Une erreur s'est produite !</div>;
  }

  return (
    <div className="App">
      <Banniere image='banniereAccueil' texte='Chez vous, partout et ailleurs' />
      {isLoading ? (
        <div className="row gx-5 d-sm-flex conteneurLogements" >
          <div>Chargement des données…</div>
        </div>
      ) : (
        <div className="row gx-5 d-sm-flex conteneurLogements" >
          {donnees && donnees.map((logement, index) => (
            <Carte lien={logement.cover} titre={logement.title} index={index} key={index}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Accueil
