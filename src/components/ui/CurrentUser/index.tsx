import { FC } from 'react'
import styled from 'styled-components'
import { device } from '../../../styles/BreakPoints'

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media ${device.sm} {
  .minimize-text {
    display: none
  }
`

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.themeText};
`


interface ToggleThemeProps {
  username: string
}

const CurrentUser: FC<ToggleThemeProps> = ({
  username
}) => {
  return (
    <Wrap>
      <div className='minimize-text'>Tài khoản:</div> <Label>{username}</Label>
    </Wrap>
  )
}

export default CurrentUser
