import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getCategorias } from '../utils/api'
import { capitalize } from '../utils/helpers'

class Categorias extends Component {
  state = {
		categorias: []
	}

  componentDidMount() {
    getCategorias().then(data =>
      this.setState({ categorias: data })
    );
  }

  render() {
    return (
      <section className="categorias-wrapper">
        <h3>Categorias</h3>
        <ul className="categorias-list">
          {this.state.categorias.map((categoria) => (
            <li key={categoria.name}><Link to={`/${categoria.path}`}>{capitalize(categoria.name)}</Link></li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Categorias