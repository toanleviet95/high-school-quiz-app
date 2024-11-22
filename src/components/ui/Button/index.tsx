import { FC, ReactNode } from 'react'
import { ButtonStyle, IconLeft, IconRight } from './styled'

interface ButtonTypes {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  outline?: boolean
  bold?: boolean
  big?: boolean
  disabled?: boolean
  width?: string
  fontSize?: string
}

const Button: FC<ButtonTypes> = ({
  text,
  onClick,
  icon,
  iconPosition,
  outline,
  bold,
  big,
  disabled,
  width,
  fontSize
}) => {
  return (
    <ButtonStyle
      onClick={onClick}
      outline={outline}
      bold={bold}
      big={big}
      width={width}
      disabled={disabled}
      fontSize={fontSize}
    >
      {icon && iconPosition === 'left' && <IconLeft outline={outline}>{icon}</IconLeft>}
      <span className="minimize-text">{text}</span>
      {icon && iconPosition === 'right' && <IconRight outline={outline}>{icon}</IconRight>}
    </ButtonStyle>
  )
}

export default Button
