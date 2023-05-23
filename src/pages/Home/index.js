import { useEffect } from "react";
import { getMovies } from "../../api/movie"
import { Title } from "../../components/Title"

export const HomePage = () => {

  const handleGetMovies = async () => {
    const response = await getMovies();

    console.log(response)
  }

  useEffect(() => {
    handleGetMovies()
  }, [])

  return (
    <Title text='Listagem de filmes' />
  )
}