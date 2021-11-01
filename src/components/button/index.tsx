import React from "react"

import { Container } from "./style"

export interface Props {
  backgroundColor?: string,
  color?: string,
  outlined?: boolean,
  onClick?: () => void,
  disabled?: boolean
}

const ButtonWrapper: React.FC<Props> = ({
  children,
  backgroundColor = "#34D399" ,
  color = "#fff",
  outlined = false,
  ...props
  
}) => {
  return (
    <Container backgroundColor={backgroundColor} color={color} outlined={outlined} {...props}>{children}</Container>
  )
}

export {  ButtonWrapper as Button }