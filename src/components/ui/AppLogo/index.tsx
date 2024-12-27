import styled from 'styled-components'
import SheepLogo from '../../../assets/images/sheep-logo.jpg'

const Img = styled.img`
  width: ${({ width }) => (width ? width : '250px')};
`

function AppLogo({ width = '250px' }) {
  return <Img width={width} src={SheepLogo}></Img>
}

export default AppLogo
