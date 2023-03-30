import { ADD_FAVORITE, DELETE_CHARACTER_ID, SET_CHARACTER_ID } from '../actions/actions-type'

const initialState = {
  characters: [],
  favorites: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_ID:
      return { ...state, characters: [...state.characters, action.payload] }

    case DELETE_CHARACTER_ID:
      const index = action.payload
      const { characters } = state
      return { ...state, characters: [...characters.slice(0, index), ...characters.slice(index + 1)] }

      case ADD_FAVORITE:
        return {...state, favorites: [...state.favorites, action.payload] }

      default:
      return { ...state }
  }
}

export default rootReducer
