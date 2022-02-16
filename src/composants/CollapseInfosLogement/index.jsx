import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

const StyleBloc = {
    display: "block",
    marginBottom: "2rem",
    width: "47%"
}

const StyleBouton = {
    borderRadius: "10px",
    display: "block",
    width: "100%",
    border: "none",
    backgroundColor: "#ff6060",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    textAlign: "left",
    textDecoration: "none",
    boxShadow: "none" // retire les bords bleus autour du bouton-titre quand il a le focus
}

const StyleTexte = {
    paddingTop : "40px",
    background: "#f7f7f7",
    color: "#ff6060",
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "normal",
    padding: "18px"
}

function CollapseInfosLogement(props) {
    const [open, setOpen] = useState(false)
    return (
        <div style={StyleBloc} >
            <div style={{height: 'auto' }}>
                <Button
                    variant="link"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    style={StyleBouton}
                    className="collapsible-link styleBoutonLogement"
                >
                    {props.titre}
                </Button>
                <Collapse in={!open} >
                    <div style={{padding: "0"}}> {/* Nécessaire sinon le collapse est saccadé */}
                        <p style={StyleTexte} >
                            {props.texte}
                        </p>
                    </div>
                </Collapse>
            </div>
        </div>
    ) 
}

export default CollapseInfosLogement