import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

function CollapseAPropos(props) {
    const [open, setOpen] = useState(false)
    return (
        <div className='CollapseAProposStyleBloc'>
            <Button
                variant="link"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="collapsible-link CollapseAProposStyleBouton"
            >
                {props.titre}
            </Button>
            <Collapse in={open} className='row g-0'>
                <div > {/* Nécessaire sinon le collapse est saccadé */}
                    <p className='CollapseAProposStyleTexte' >
                        {props.texte}
                    </p>
                </div>    
            </Collapse>
        </div>
    ) 
}

export default CollapseAPropos