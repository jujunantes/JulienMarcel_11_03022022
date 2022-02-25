import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

function CollapseInfosLogement(props) {
    const [open, setOpen] = useState(false)
    return (
        <div className='CollapseInfosLogementStyleBloc' >
            <div style={{height: 'auto' }}>
                <Button
                    variant="link"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    className="collapsible-link styleBoutonLogement CollapseInfosLogementStyleBouton"
                >
                    {props.titre}
                </Button>
                <Collapse in={!open} >
                    <div style={{padding: "0"}}> {/* Nécessaire sinon le collapse est saccadé */}
                        <div className="StyleTexteCollapseInfosLogement" >
                            {props.texte}
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    ) 
}

export default CollapseInfosLogement