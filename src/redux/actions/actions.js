import { ADD_FAVORITE, DELETE_CHARACTER_ID, DELETE_FAVORITE, SET_CHARACTER_ID } from './actions-type'

export const setCharacterId = (id) => {
  const TOTAL_CHARACTERS = 826

  return function (dispatch) {
    if (id > TOTAL_CHARACTERS) return
    if (id <= 0) return

    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
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
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(json => dispatch({
        type: ADD_FAVORITE,
        payload: json
      }))
  }
}

export const removeFavorite = (id) => {
  return {type:DELETE_FAVORITE, payload:id}
}