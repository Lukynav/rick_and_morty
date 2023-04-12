import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Cards, Navegation } from './components'
import { About, Detail, Favorites, Login } from './routes'

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
