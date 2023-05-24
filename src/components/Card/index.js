import { Container, Poster, Release, Title } from "./styles"

export const Card = ({ poster, title, release, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Poster
        src={poster}
        alt="poster"
      />

      <Title>{title}</Title>

      <Release>Lançamento: {release}</Release>
    </Container>
  )
}