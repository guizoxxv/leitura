import { combineReducers } from 'redux'
import { CARREGAR_CATEGORIAS, CARREGAR_POSTAGENS, CARREGAR_POSTAGEM, EXCLUIR_POSTAGEM, CARREGAR_COMENTARIOS, CARREGAR_COMENTARIO, EXCLUIR_COMENTARIO } from '../actions'

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

const initialStateComentarios = {
  comentarios: []
}

function comentarios(state = initialStateComentarios, action) {
  switch(action.type) {
    case CARREGAR_COMENTARIOS:
      return {
        ...state,
        comentarios: action.comentarios
      }
    default:
      return state
  }
}

const initialStateComentario = {
  comentarios: [],
  comentario: {}
}

function comentario(state = initialStateComentario, action) {
  switch(action.type) {
    case CARREGAR_COMENTARIO:
      return {
        ...state,
        comentarios: state.comentarios.concat(action.comentario),
        comentario: action.comentario
      }
    case EXCLUIR_COMENTARIO:
      return {
        ...state,
        comentarios: state.comentarios.filter(comentario => comentario.id !== action.id)
      }
    default:
      return state
  }
}

export default combineReducers({
  categorias,
  postagens,
  postagem,
  comentarios,
  comentario
})