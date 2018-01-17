import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PostsTable extends Component {
  render() {
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
            <tr>
              <td>React post</td>
              <td>React</td>
              <td>Guizo</td>
              <td>02/01/2018</td>
              <td>10</td>
              <td>
                <button style={{ 'marginRight':'5px' }}><Link to="/ver">Ver</Link></button>
                <button><Link to="/editar">Editar</Link></button>
              </td>
            </tr>
            <tr>
              <td>Redux post</td>
              <td>React</td>
              <td>Guizo</td>
              <td>02/01/2018</td>
              <td>10</td>
              <td>
                <button style={{ 'marginRight':'5px' }}><Link to="/ver">Ver</Link></button>
                <button><Link to="/editar">Editar</Link></button>
              </td>
            </tr>
            <tr>
              <td>Udacity post</td>
              <td>React</td>
              <td>Guizo</td>
              <td>02/01/2018</td>
              <td>10</td>
              <td>
                <button style={{ 'marginRight':'5px' }}><Link to="/ver">Ver</Link></button>
                <button><Link to="/editar">Editar</Link></button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    postagens: state.postagens
  }
}

export default connect(mapStateToProps, null)(PostsTable);