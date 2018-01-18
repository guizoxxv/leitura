import * as API from '../utils/api'

export const LISTAR_CATEGORIAS = 'LISTAR_CATEGORIAS'
export const LISTAR_POSTAGENS = 'LISTAR_POSTAGENS'
export const CRIAR_POSTAGEM = 'CRIAR_POSTAGEM'
export const EXCLUIR_POSTAGEM = 'EXCLUIR_POSTAGEM'

export function listarCategorias(categorias) {
  return {
    type: LISTAR_CATEGORIAS,
    categorias
  }
}

export function callListarCategorias() {
  return (dispatch) => {
    API.listCategories().then(
      (response) => dispatch(listarCategorias(response))
    )
  }
}

export function listarPostagens(postagens) {
  return {
    type: LISTAR_POSTAGENS,
    postagens
  }
}

export function callListarPostagens() {
  return (dispatch) => {
    API.listPosts().then(
      (response) => dispatch(listarPostagens(response))
    )
  }
}

export function criarPostagem(postagem) {
  return {
    type: CRIAR_POSTAGEM,
    postagem
  }
}

export function callCriarPostagem(data) {
  return (dispatch) => {
    API.createPost(data).then(
      (response) => dispatch(criarPostagem(response))
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