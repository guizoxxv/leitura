import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { callCarregarPostagens, callCarregarPostagensPorCategoria, callExcluirPostagem, selecionarOrdem } from '../actions'
import Moment from 'moment'
import sortBy from 'sort-by'

class PostsTable extends Component {
  state = {
    ordem: 'id'
  }

  componentDidMount() {
    let categoria = this.props.match.params.categoria

    if(categoria === undefined) {
      this.props.callCarregarPostagens()
    } else {
      this.props.callCarregarPostagensPorCategoria(categoria)
    }
  }

  componentWillReceiveProps(nextProps) {
    let ordem = nextProps.ordem.ordem

    this.setState({
      ordem: ordem
    })
  }

  handleExcluirPostagem = (id) => {
    var confirm = window.confirm('Deseja mesmo excluir este registro?')

    if(confirm === true) {
      this.props.callExcluirPostagem(id)
    }
  }

  handleSelecionarOrdem = (e) => {
    let ordem = e.target.value

    this.props.selecionarOrdem(ordem)
  }

  render() {
    let postagens = this.props.postagens.postagens

    postagens.sort(sortBy(this.state.ordem))

    return (
      <section className="posts-table-wrapper">
        <div className="h3-wrapper">
          <h3>Todas as postagens</h3>
          <div className="ordenar-por">
            <label>Ordenar por:</label>
            <select onChange={this.handleSelecionarOrdem}>
              <option value="id">ID</option>
              <option value="timestamp">Data</option>
              <option value="voteScore">Votos</option>
            </select>
          </div>
          <button><Link to="/postagem/criar">Nova Postagem</Link></button>
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
                  <button style={{ 'marginRight':'5px' }}><Link to={`/postagem/${postagem.id}/ver`}>Ver</Link></button>
                  <button style={{ 'marginRight':'5px' }}><Link to={`/postagem/${postagem.id}/editar`}>Editar</Link></button>
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

const mapStateToProps = ({ postagens, postagem, ordem }) => ({
  postagens,
  postagem,
  ordem
})

export default connect(mapStateToProps, { callCarregarPostagens, callCarregarPostagensPorCategoria, callExcluirPostagem, selecionarOrdem })(PostsTable)