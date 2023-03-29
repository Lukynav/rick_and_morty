import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navegation from './components/Navegation/Navegation'
import Index from './routes'
import About from './routes/about'
import Detail from './routes/detail'

const App = () => {
  const [characters, setCharacters] = useState([])
  return (
    <main>
      <Navegation setCharacters={setCharacters} />
      <div className='dinamicContent'>
        <Routes>
          <Route path='/home' element={<Index characters={characters} setCharacters={setCharacters} />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
