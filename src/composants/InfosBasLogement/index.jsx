import CollapseInfosLogement from '../CollapseInfosLogement'

function InfosBasLogement(props) {
    return (
        <div className='conteneurInfosBasLogement'>
            <CollapseInfosLogement titre="Description" texte={props.enrLogement.description} />
            <CollapseInfosLogement titre="Équipements" texte={
                props.enrLogement.equipments.map((equipement,index) => {
                    return ( <div className='styleEquipement' key={index}>{equipement}</div> )
                })}
            />
        </div>
    )
}

export default InfosBasLogement