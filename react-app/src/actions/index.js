import * as API from '../utils/api'

export const LISTAR_CATEGORIAS = 'LISTAR_CATEGORIAS'
export const LISTAR_POSTAGENS = 'LISTAR_POSTAGENS'
export const CRIAR_POSTAGEM = 'CRIAR_POSTAGEM'

export function listarCategorias(categorias) {
  return {
    type: LISTAR_CATEGORIAS,
    categorias
  }
}

export function callListarCategorias(data) {
  return (dispatch) => {
    API.listCategories().then(
      (response) => dispatch(listarCategorias(response))
    )
  }
}

export function listarPostagens() {
  return {
    type: LISTAR_POSTAGENS,
    payload: {}
  }
}

export function criarPostagem(data) {
  return {
    type: CRIAR_POSTAGEM,
    payload: data
  }
}

export function submitCriarPostagem(data) {
  return (dispatch) => {
    API.createPost(data).then(
      (response) => dispatch(criarPostagem(response))
    )
  }
}