import { Link } from 'react-router-dom'

function Erreur404() {
    return (
    <div>
        <div className='Chiffre404'>404</div>
        <div className='Message404'>Oups! La page que vous demandez n'existe pas.</div>
        <Link to='/' div className='LienStylise'>Retourner sur la page d'accueil</Link>
    </div>)
  }
  
  export default Erreur404