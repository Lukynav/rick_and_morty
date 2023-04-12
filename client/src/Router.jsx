import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Cards, Navegation } from './components'
import { About, Detail, Favorites, Login } from './routes'

const App = () => {
  const CHARACTES = useSelector(state => state.characters)
  const FAVORITES = useSelector(state => state.favorites)

  return (
    <main>
      <Navegation />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Cards characters={CHARACTES} />} />
        <Route path='/favorites' element={<Favorites characters={FAVORITES} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </main>
  )
}

export default App
