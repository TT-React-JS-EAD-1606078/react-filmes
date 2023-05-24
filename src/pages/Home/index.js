import { useEffect, useState } from "react";
import { getMovies } from "../../api/movie"
import { Title } from "../../components/Title"
import { Card } from "../../components/Card";
import { EmptyData, MoviesList, SearchContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { Pagination } from "../../components/Pagination";
import { Modal } from "../../components/Modal";

export const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [totalItems, setTotalItems] = useState(0)
  const [page, setPage] = useState(1)
  const [openModal, setOpenModal] = useState(false)

  const handleGetMovies = async (searchParam = '', newPage) => {
    setIsLoading(true)

    const response = await getMovies(searchParam, newPage);

    if (response.data.Response === 'True') {
      setMovies(response.data.Search)
      setTotalItems(Number(response.data.totalResults))
    } else {
      setTotalItems(0)
      setMovies([])
    }

    setIsLoading(false)
  }

  const handleSearch = () => {
    handleGetMovies(search, 1)
    setPage(1)
  }

  useEffect(() => {
    handleGetMovies()
  }, [])

  return (
    <>
      <Title text='Listagem de filmes' />

      <SearchContainer>
        <Input
          name='search'
          label='Busca'
          placeholder='Digite para buscar'
          value={search}
          onChange={event => setSearch(event.target.value)}
        />

        <Button onClick={handleSearch} >Buscar</Button>
      </SearchContainer>

      {isLoading && <Loading text='Carregando filmes...' />}

      {!movies.length && !isLoading && (
        <EmptyData>Nenhum filme encontrado {!search && '- Digite para pesquisar'}</EmptyData>
      )}


      {
        totalItems > 0 && !isLoading &&
        <Pagination
          perPage={10}
          totalItems={totalItems}
          currentPage={page}
          onNavigate={(newPage) => {
            setPage(newPage)
            handleGetMovies(search, newPage)
          }}
        />
      }

      <MoviesList>
        {!isLoading && movies.map(movie => {
          return (
            <Card
              title={movie.Title}
              poster={movie.Poster}
              release={movie.Year}
              onClick={() => setOpenModal(true)}
            />
          )
        })}
      </MoviesList>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <h1>Titulo do filme</h1>
        <h2>Subtitulo</h2>
      </Modal>
    </>
  )
}