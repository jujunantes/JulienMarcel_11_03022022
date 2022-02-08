import styled from 'styled-components'

const LogoFooter = styled.img`
  height: 40px;
  width: 122px;
  margin-bottom: 28px;
`

const Footer = styled.footer`
    text-align: center;
    display: flex;
    color: white;
    background-color: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 66px;
    padding-bottom: 29px;
`

const PFooter = styled.p`
    font-size: 24px;
`

function PiedDePage() {
    return (
    <Footer>
        <LogoFooter src={require('../../medias/LogoPiedDePage.png')} />
        <div>
            <PFooter>© 2022 Kasa. All rights reserved</PFooter>
        </div>
    </Footer>
    )
}

export default PiedDePage