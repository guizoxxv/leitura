import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { callCarregarComentarios, callCriarComentario, callExcluirComentario } from '../actions'
import { connect } from 'react-redux'
import Moment from 'moment'

class Comentarios extends Component {
  componentDidMount() {
    this.props.callCarregarComentarios(this.props.id)
  }

  handleCriarComentario = (e) => {
    e.preventDefault()

    let comentario = {
      id: Date.now(),
      parentId: this.props.id,
      timestamp: Date.now(),
      author: e.target.autor.value,
      body: e.target.corpo.value,
    }

    this.props.callCriarComentario(comentario)

    window.location = '/postagem/' + this.props.id + '/ver'
  }

  handleExcluirComentario = (id) => {
    var confirm = window.confirm('Deseja mesmo excluir este registro?')

    if(confirm === true) {
      this.props.callExcluirComentario(id)
    }

    window.location = '/postagem/' + this.props.id + '/ver'
  }

  render() {
    let comentarios = this.props.comentarios.comentarios

    return (
      <section className="comentarios-wrapper">
        <ul>
          {comentarios !== undefined && comentarios.map((comentario) => (
            <li key={comentario.id} className="comentario">
              <div><b>{comentario.author} em {Moment.unix(comentario.timestamp/1000).format('DD/MM/YYYY')}:</b></div>
              <div className="comentario-body">
                {comentario.body}
              </div>
              <div className="comentario-footer">
                <div>
                  <button style={{'marginRight':'5px'}}><Link to={`/comentario/${comentario.id}/editar`}>Editar</Link></button>
                  <button onClick={() => this.handleExcluirComentario(comentario.id)}>Excluir</button>
                </div>
                <div className="votes-wrapper">
                  <span>{comentario.voteScore} votos</span>
                  <button>+1</button>
                </div>
              </div>
              <hr/>
            </li>
          ))}
        </ul>
        <hr/>
        <form className="comentario-form" onSubmit={this.handleCriarComentario}>
          <div style={{'marginBottom':'10px'}}><b>Comentar</b></div>
          <input name="autor" type="text" placeholder="Autor" style={{'marginBottom':'10px'}} required/>
          <br/>
          <textarea name="corpo" placeholder="Corpo do comentário" required/>
          <br/>
          <button>Comentar</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = ({ comentarios, comentario }) => ({
  comentarios,
  comentario
})

export default connect(mapStateToProps, { callCarregarComentarios, callCriarComentario, callExcluirComentario })(Comentarios)