import { combineReducers } from 'redux'
import { LISTAR_CATEGORIAS, LISTAR_POSTAGENS, CRIAR_POSTAGEM, EXCLUIR_POSTAGEM } from '../actions'

function categorias(state = {}, action) {
  switch(action.type) {
    case LISTAR_CATEGORIAS:
      return {
        ...state,
        categorias: action.categorias
      }
    default:
      return state
  }
}

const initialStatePostagens = {
  postagens: [],
  postagem: {}
}

function postagens(state = initialStatePostagens, action) {
  switch(action.type) {
    case LISTAR_POSTAGENS:
      return {
        ...state,
        postagens: action.postagens
      }
    case CRIAR_POSTAGEM:
      return {
        ...state,
        postagens: state.postagens.concat(action.postagem)
      }
    case EXCLUIR_POSTAGEM:
    console.log(state, action.id)
      return {
        ...state,
        postagens: state.postagens.filter(post => post.id !== action.id)
      }
    default:
      return state
  }
}

export default combineReducers({
  categorias,
  postagens
})