import { useEffect, useState } from "react"
import { Container, Navigation, Page } from "./styles"

export const Pagination = ({ totalItems, perPage, currentPage, onNavigate }) => {
  const [pages, setPage] = useState([])

  const handleGetPages = () => {
    const totalPages = Math.ceil(totalItems / perPage)
    const newArray = []

    for (let index = 1; index < (totalPages + 1); index++) {
      newArray.push(index)
    }

    setPage(newArray)
  }

  useEffect(() => {
    handleGetPages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, perPage])

  return (
    <Container>
      <Navigation onClick={() => onNavigate(currentPage - 1)} disabled={currentPage === 1}> {'<'} </Navigation>

      {pages.map(page => (
        <Page
          active={currentPage === page}
          onClick={() => onNavigate(page)}
        >
          {page}
        </Page>
      ))}

      <Navigation onClick={() => onNavigate(currentPage + 1)} disabled={currentPage === pages.length}> {'>'} </Navigation>
    </Container>
  )
}