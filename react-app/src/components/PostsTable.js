import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { callListarPostagens, callExcluirPostagem } from '../actions'
import Moment from 'moment'

class PostsTable extends Component {
  componentDidMount() {
    this.props.callListarPostagens()
  }

  handleExcluirPostagem = (id) => {
    this.props.callExcluirPostagem(id)
  }

  render() {
    const { postagens } = this.props.postagens

    return (
      <section className="posts-table-wrapper">
        <div className="h3-wrapper">
          <h3>Todas as postagens</h3>
          <div className="ordenar-por">
            <label>Ordenar por:</label>
            <select>
              <option value="">Selecione</option>
              <option value="data">Data</option>
              <option value="votos">Votos</option>
            </select>
          </div>
          <button><Link to="/criar">Nova Postagem</Link></button>
        </div>
        <table className="posts-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Categoria</th>
              <th>Autor</th>
              <th>Data</th>
              <th>Votos</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {postagens !== undefined && postagens.map((postagem) => (
              <tr key={postagem.id}>
                <td>{postagem.title}</td>
                <td>{postagem.category}</td>
                <td>{postagem.author}</td>
                <td>{Moment.unix(postagem.timestamp/1000).format('DD/MM/YYYY')}</td>
                <td>{postagem.voteScore}</td>
                <td>
                  <button style={{ 'marginRight':'5px' }}><Link to="/ver">Ver</Link></button>
                  <button style={{ 'marginRight':'5px' }}><Link to="/editar">Editar</Link></button>
                  <button onClick={() => this.handleExcluirPostagem(postagem.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    )
  }
}

const mapStateToProps = ({ postagens, postagem }) => ({
  postagens,
  postagem
})

export default connect(mapStateToProps, { callListarPostagens, callExcluirPostagem })(PostsTable)