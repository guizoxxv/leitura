import { combineReducers } from 'redux'
import { LISTAR_CATEGORIAS } from '../actions'

function categorias(state = {}, action) {
  const { categorias } = action

  switch(action.type) {
    case LISTAR_CATEGORIAS:
      return {
        ...state,
        categorias
      };
    default:
      return state
  }
}

export default combineReducers({
  categorias
})