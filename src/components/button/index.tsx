import React, { Children } from "react"

interface Props {
  backgroundColor: string,
  color: string
}

const style : React.CSSProperties = {
  backgroundColor: "#34D399",
  color: "#fff"
}

export const Button: React.FC<Props> = ({children, backgroundColor, color}) => {
  return (
    <button style={style}> {children}</button>
  )
}