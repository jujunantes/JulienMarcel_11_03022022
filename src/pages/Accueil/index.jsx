import Banniere from '../../composants/Banniere'
import Carte from '../../composants/Carte'
import { Logement } from '../../utils/logement.js'
import donnees from './logements.json'


function chargeLogements()  {
      for (const logement of donnees.logements) {
        window.mesLogements.push( new Logement(logement.id, logement.title, logement.cover, logement.pictures, logement.description, logement.host, logement.rating, logement.location, logement.equipements, logement.tags))
      }
}

function Accueil() {
  if (window.mesLogements.length === 0) chargeLogements()
  return (
    <div className="App">
      <Banniere image='JumbotronAccueil'/>
      <div className="row gx-5 d-sm-flex conteneurLogements" >
        {window.mesLogements.map((logement, index) => (
          <Carte lien={logement.cover} titre={logement.title} index={index} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Accueil
