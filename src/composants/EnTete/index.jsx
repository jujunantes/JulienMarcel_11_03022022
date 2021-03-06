import { Link, NavLink } from 'react-router-dom'

function EnTete() {
    return (
    <div className='ConteneurNavigation'>
        <Link to="/">
            <img className='LogoStyle' src={require('../../medias/LogoKasa.png')} alt='logo de Kasa' />
        </Link>
        <div>
            <NavLink className="active" to='/' className='aEnTete'>Accueil</NavLink >
            <NavLink className="active" to='/apropos' className='aEnTete'>A Propos</NavLink >
        </div>
    </div>
    )
}

export default EnTete