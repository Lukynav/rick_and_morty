import { ADD_FAVORITE, DELETE_CHARACTER_ID, DELETE_FAVORITE, FILTER_FAVORITES, RESET_FAVORITES, SET_CHARACTER_ID, SORT_FAVORITES } from './actions-type'

export const setCharacterId = (id) => {
  const TOTAL_CHARACTERS = 826

  return function (dispatch) {
    if (id > TOTAL_CHARACTERS) return
    if (id <= 0) return

    return fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(res => res.json())
      .then(json => dispatch({
        type: SET_CHARACTER_ID,
        payload: json
      }))
  }
}

export const deleteCharacterId = (id) => {
  return { type: DELETE_CHARACTER_ID, payload: id }
}

export const addFavorite = (id) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/rickandmorty/character/${id}}`)
      .then(res => res.json())
      .then(json => dispatch({
        type: ADD_FAVORITE,
        payload: json
      }))
  }
}

export const removeFavorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id }
}

export const sortFavorites = (sort) => {
  return { type: SORT_FAVORITES, payload: sort }
}

export const filterFavorites = (sort) => {
  return { type: FILTER_FAVORITES, payload: sort }
}

export const resetFavorites = () => {
  return { type: RESET_FAVORITES }
}
