import styled from 'styled-components'

const LogoFooter = styled.img`
  height: 60px;
`

const Footer = styled.footer`
    text-align: center;
    display: flex;
    color: white;
    background-color: black;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`

function PiedDePage() {
    return (
    <Footer>
        <LogoFooter src={require('../../medias/LogoPiedDePage.png')} />
        <div>
            <p>© 2022 Kasa. All rights reserved</p>
        </div>
    </Footer>
    )
}

export default PiedDePage