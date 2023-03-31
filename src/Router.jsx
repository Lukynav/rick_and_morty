import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Cards from './components/Cards/Cards'
import Navegation from './components/Navegation/Navegation'
import About from './routes/about/about'
import Detail from './routes/detail/detail'
import Favorites from './routes/favorites/favorites'
import Login from './routes/login/login'

const App = () => {
  const characters = useSelector(state => state.characters)
  const favoritesArr = useSelector(state => state.favorites)

  return (
    <main>
      <Navegation />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Cards characters={characters} />} />
        <Route path='/favorites' element={<Favorites characters={favoritesArr} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </main>
  )
}

export default App
