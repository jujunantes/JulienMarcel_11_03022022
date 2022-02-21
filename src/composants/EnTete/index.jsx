import { Link, NavLink } from 'react-router-dom'

function EnTete() {
    return (
    <div className='ConteneurNavigation'>
        <Link to="/">
            <img className='LogoStyle' src={require('../../medias/LogoKasa.png')} alt='logo de Kasa' />
        </Link>
        <div>
            <NavLink activeClassName="active" to='/' >Accueil</NavLink >
            <NavLink activeClassName="active" to='/apropos' >A Propos</NavLink >
        </div>
    </div>
    )
}

export default EnTete