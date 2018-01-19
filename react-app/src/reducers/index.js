import { combineReducers } from 'redux'
import { CARREGAR_CATEGORIAS, CARREGAR_POSTAGENS, CARREGAR_POSTAGEM, EDITAR_POSTAGEM, EXCLUIR_POSTAGEM } from '../actions'

function categorias(state = {}, action) {
  switch(action.type) {
    case CARREGAR_CATEGORIAS:
      return {
        ...state,
        categorias: action.categorias
      }
    default:
      return state
  }
}

const initialStatePostagens = {
  postagens: []
}

function postagens(state = initialStatePostagens, action) {
  switch(action.type) {
    case CARREGAR_POSTAGENS:
      return {
        ...state,
        postagens: action.postagens
      }
    case EXCLUIR_POSTAGEM:
      return {
        ...state,
        postagens: state.postagens.filter(post => post.id !== action.id)
      }
    default:
      return state
  }
}

const initialStatePostagem = {
  postagens: [],
  postagem: {}
}

function postagem(state = initialStatePostagem, action) {
  switch(action.type) {
    case CARREGAR_POSTAGEM:
      return {
        ...state,
        postagem: action.postagem
      }
    case EXCLUIR_POSTAGEM:
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
  postagens,
  postagem
})