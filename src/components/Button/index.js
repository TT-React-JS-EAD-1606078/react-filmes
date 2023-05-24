import { StyledButton } from "./styles"

export const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}