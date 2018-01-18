import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { callCriarPostagem } from '../actions'
import { connect } from 'react-redux'

class CriarPostagem extends Component {
  handleCriarPostagem = (e) => {
    e.preventDefault()
    
    const data = {
      id: Date.now(),
      timestamp: Date.now(),
      author: e.target.autor.value,
      body: e.target.corpo.value,
      title: e.target.titulo.value,
      category: e.target.categoria.value,
      voteScore: 0
    }

    this.props.callCriarPostagem(data)

    window.location = '/'
  }

  render() {
    return (
      <main>
        <div className="voltar-btn-wrapper">
          <button><Link to="/">Voltar</Link></button>
        </div>
        <section className="main-content">
          <h3 className="post-form-title">Criar Postagem</h3>
          <form className="post-form" onSubmit={this.handleCriarPostagem}>
            <div className="form-group">
              <label>Título:</label>
              <input
                name="titulo"
                type="text"
                placeholder="Título"
                required
              />
            </div>
            <div className="form-group">
              <label>Autor:</label>
              <input
                name="autor"
                type="text"
                placeholder="Autor"
                required
              />
            </div>
            <div className="form-group">
              <label>Categoria:</label>
              <select name="categoria">
                <option value="">Selecione</option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </select>
            </div>
            <div className="form-group">
              <label>Corpo:</label>
              <textarea
                name="corpo"
              ></textarea>
            </div>
            <div className="form-group">
              <button>Criar</button>
            </div>
          </form>
        </section>
      </main>
    )
  }
}

export default connect(null, { callCriarPostagem })(CriarPostagem)