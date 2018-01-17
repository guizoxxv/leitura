import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EditarPostagem extends Component {
  render() {
    return (
      <main>
        <div className="voltar-btn-wrapper">
          <button><Link to="/">Voltar</Link></button>
        </div>
        <section className="main-content">
          <h3 className="post-form-title">Editar Postagem</h3>
          <div className="post-form">
            <div className="form-group">
              <label>Título:</label>
              <input placeholder="Título"/>
            </div>
            <div className="form-group">
              <label>Autor:</label>
              <input placeholder="Autor"/>
            </div>
            <div className="form-group">
              <label>Categoria:</label>
              <select>
                <option value="">Selecione</option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
              </select>
            </div>
            <div className="form-group">
              <label>Corpo:</label>
              <textarea></textarea>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default EditarPostagem