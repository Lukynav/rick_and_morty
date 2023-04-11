// Test extracted of tasks
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from '../components/Card/Card'
import Cards from '../components/Cards/Cards'
import SearchBar from '../components/SearchBar'
import data from '../data'

describe('TASK 01| Ejercise 1', () => {
  test('Should card be a function', () => {
    expect(typeof Card).toBe('function')
  })

  test('Should cards be a function', () => {
    expect(typeof Cards).toBe('function')
  })

  test('Should searchBar be a function', () => {
    expect(typeof SearchBar).toBe('function')
  })
})

describe('TASK 01| Ejercise 2', () => {
  test('Should card render name', () => {
    const { name } = data[0]
    render(<Card name={name} />)

    expect(screen.getByText(name)).toBeInTheDocument()
  })

  test('Should card render status', () => {
    const { status } = data[0]
    render(<Card status={status} />)

    expect(screen.getByText(status)).toBeInTheDocument()
  })

  test('Should card render specie', () => {
    const { species } = data[0]
    render(<Card species={species} />)

    expect(screen.getByText(species)).toBeInTheDocument()
  })

  test('Should card render gender', () => {
    const { gender } = data[0]
    render(<Card status={gender} />)

    expect(screen.getByText(gender)).toBeInTheDocument()
  })

  test('Should card render origin', () => {
    const { origin } = data[0]
    render(<Card origin={origin.name} />)

    expect(screen.getByText(origin.name)).toBeInTheDocument()
  })

  test('Should card render a image', () => {
    const { image } = data[0]
    render(<Card imgUrl={image} />)

    const imgUrl = screen.getByAltText('Rick and morty character')
    const hashKeys = Object.keys(imgUrl)

    expect(imgUrl[hashKeys[1]].src).toBe(image)
  })
})
