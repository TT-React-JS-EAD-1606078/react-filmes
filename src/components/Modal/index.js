import { Body, Container } from "./styles"

export const Modal = ({ open, onClose, children }) => {

  if (!open) {
    return null
  }

  return (
    <Container onClick={onClose}>
      <Body onClick={(event) => event.stopPropagation()}>
        {children}
      </Body>
    </Container>
  )
}