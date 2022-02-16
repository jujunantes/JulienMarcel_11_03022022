import CollapseInfosLogement from '../CollapseInfosLogement'

function InfosBasLogement(props) {
    const indexLogementInt = parseInt(props.index)
    return (
        <div className='conteneurInfosBasLogement'>
            <CollapseInfosLogement titre="Description" texte={window.mesLogements[indexLogementInt].description} />
            <CollapseInfosLogement titre="Équipements" texte={
                window.mesLogements[indexLogementInt].equipments.map((equipement,index) => {
                    return ( <p className='styleEquipement' key={index}>{equipement}</p> )
                })}
            />
        </div>
    )
}

export default InfosBasLogement