import { useParams } from 'react-router-dom'
import CarouselLogement from '../../composants/CarouselLogement'

function Logement() {
  const { indexLogement } = useParams()
  const indexLogementInt = parseInt(indexLogement)
  console.log("indexLogement : " + indexLogement + ", " + window.mesLogements[indexLogementInt])
    return (
      <div>
        <CarouselLogement index='indexLogement' />
        {window.mesLogements[indexLogementInt].title}
      </div>)
  }
  
  export default Logement