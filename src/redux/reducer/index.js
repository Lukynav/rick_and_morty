import { resetFavorites, sortFavorites } from '../actions/actions'
import { ADD_FAVORITE, DELETE_CHARACTER_ID, DELETE_FAVORITE, FILTER_FAVORITES, RESET_FAVORITES, SET_CHARACTER_ID, SORT_FAVORITES } from '../actions/actions-type'

const initialState = {
  characters: [],
  favorites: [],
  favoritesPrevFiltered: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_ID:
      return { ...state, characters: [...state.characters, action.payload] }

    case DELETE_CHARACTER_ID:
      const characterFilter = state.characters.filter(el => el.id !== action.payload)
      const favFilter = state.favorites.filter(el => el.id !== action.payload)
      return { ...state, characters: characterFilter, favorites: favFilter, favoritesPrevFiltered:favFilter }

    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload], favoritesPrevFiltered:[...state.favorites, action.payload] }

    case DELETE_FAVORITE:
      const favoriteFilter = state.favoritesPrevFiltered.filter(el => el.id !== action.payload)
      return { ...state, favorites: favoriteFilter, favoritesPrevFiltered:favoriteFilter }

    case SORT_FAVORITES:
      const sortArr = state.favorites.sort((a,b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      })
      if(action.payload === 'Descendent') sortArr.reverse()
      return { ...state, favorites: [...sortArr] }
      
    case FILTER_FAVORITES:
      let filterArr = []
      if(action.payload === 'Male') filterArr = state.favoritesPrevFiltered.filter(el => el.gender === 'Male')
      if(action.payload === 'Female') filterArr = state.favoritesPrevFiltered.filter(el => el.gender === 'Female')
      if(action.payload === 'Genderless') filterArr = state.favoritesPrevFiltered.filter(el => el.gender === 'Genderless')
      if(action.payload === 'unknown') filterArr = state.favoritesPrevFiltered.filter(el => el.gender === 'unknown')
      return {...state, favorites: filterArr}

    case RESET_FAVORITES:
      return {...state, favorites:[...state.favoritesPrevFiltered]}
    default:
      return { ...state }
  }
}

export default rootReducer
