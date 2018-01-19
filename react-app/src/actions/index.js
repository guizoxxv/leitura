import * as API from '../utils/api'

export const CARREGAR_CATEGORIAS = 'CARREGAR_CATEGORIAS'
export const CARREGAR_POSTAGENS = 'CARREGAR_POSTAGENS'
export const CARREGAR_POSTAGEM = 'CARREGAR_POSTAGEM'
export const EDITAR_POSTAGEM = 'EDITAR_POSTAGEM'
export const EXCLUIR_POSTAGEM = 'EXCLUIR_POSTAGEM'

export function carregarCategorias(categorias) {
  return {
    type: CARREGAR_CATEGORIAS,
    categorias
  }
}

export function callCarregarCategorias() {
  return (dispatch) => {
    API.getCategories().then(
      (response) => dispatch(carregarCategorias(response))
    )
  }
}

export function carregarPostagens(postagens) {
  return {
    type: CARREGAR_POSTAGENS,
    postagens
  }
}

export function callCarregarPostagens() {
  return (dispatch) => {
    API.getPosts().then(
      (response) => dispatch(carregarPostagens(response))
    )
  }
}

export function carregarPostagem(postagem) {
  return {
    type: CARREGAR_POSTAGEM,
    postagem
  }
}

export function callCarregarPostagem(id) {
  return (dispatch) => {
    API.getPost(id).then(
      (response) => dispatch(carregarPostagem(response))
    )
  }
}

export function callCriarPostagem(postagem) {
  return (dispatch) => {
    API.createPost(postagem).then(
      (response) => dispatch(carregarPostagem(response))
    )
  }
}

export function callEditarPostagem(postagem) {
  return (dispatch) => {
    API.editPost(postagem).then(
      (response) => dispatch(carregarPostagem(response))
    )
  }
}

export function excluirPostagem(id) {
  return {
    type: EXCLUIR_POSTAGEM,
    id
  }
}

export function callExcluirPostagem(data) {
  return (dispatch) => {
    API.deletePost(data).then(
      () => dispatch(excluirPostagem(data))
    )
  }
}