import styled from 'styled-components'
import { device } from '../../../styles/BreakPoints'
interface ButtonType {
  outline?: boolean
  bold?: boolean
  big?: boolean
  width?: string
  fontSize?: string
  isMinimizeText?: boolean
}
interface SpanType {
  outline?: boolean
}

export const ButtonStyle = styled.button.attrs(({ outline, bold, big, width, fontSize, isMinimizeText }: ButtonType) => ({
  outline,
  bold,
  big,
  width,
  fontSize,
  isMinimizeText
}))`
  width: ${({ width }) => (width ? width : '195px')};
  min-height: 50px;
  color: ${({ theme, outline }) =>
    outline ? theme.colors.outlineButtonText : theme.colors.buttonText};
  background: ${({ theme, outline }) =>
    outline ? theme.colors.cardBackground : theme.colors.buttonBackground};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 'clamp(16px, 5vw, 24px)')};
  border: 1px solid
    ${({ theme, outline }) => (!outline ? 'none' : theme.colors.themeColor)};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.md} {
    max-width: ${({ isMinimizeText }) => (isMinimizeText ? '40px' : '250px')};
    min-height: 40px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
    .minimize-text {
      display: none;
    }
  }
  @media ${device.sm} {
    max-width: ${({ isMinimizeText }) => (isMinimizeText ? '40px' : '250px')};
    .minimize-text {
      display: none;
    }
  }

  &:active {
    transform: scale(0.98);
    box-shadow: ${({ theme }) => theme.shadows.activeButton};
    transition: 0.2s all;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.disabledButton};
    color: ${({ theme }) => theme.colors.darkGray};
    cursor: not-allowed;
    transform: unset;
    box-shadow: unset;
  }
`

export const IconLeft = styled.span.attrs(({ outline }: SpanType) => ({
  outline,
}))`
  margin-right: 10px;
  display: flex;
  svg {
    path {
      fill: ${({ theme, outline }) => outline ? theme.colors.outlineButtonText : theme.colors.buttonText};
    }
  }
`

export const IconRight = styled.span.attrs(({ outline }: SpanType) => ({
  outline,
}))`
  margin-left: 20px;
  display: flex;
  svg {
    path {
      fill: ${({ theme, outline }) => outline ? theme.colors.outlineButtonText : theme.colors.buttonText};
    }
  }
`
