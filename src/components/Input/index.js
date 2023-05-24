import { Container, Label, StyledInput } from "./styles"

export const Input = ({ name, label, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>

      <StyledInput name={name} {...rest} />
    </Container>
  )
}