import styled from 'styled-components'
import SheepLogo from '../../../assets/images/sheep-logo.jpg'

const Img = styled.img`
  width: 250px;
`

function AppLogo() {
  return <Img src={SheepLogo}></Img>
}

export default AppLogo
