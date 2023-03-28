import { useState } from 'react'
import Cards from './components/Cards/Cards'
import Navegation from './components/Navegation/Navegation'

const App = () => {
  const [characters, setCharacters] = useState([])
  return (
    <main>

      <Navegation setCharacters={setCharacters}/>

      <section>
        <Cards characters={characters} setCharacters={setCharacters} />
      </section>

    </main>
  )
}

export default App
