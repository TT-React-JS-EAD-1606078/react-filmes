import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/Home'
import { Header } from '../components/Header'
import { Main } from '../styles/Main'
import { Content } from '../styles/Content'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Main>
        <Header />

        <Content>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Content>
      </Main>
    </BrowserRouter>
  )
}