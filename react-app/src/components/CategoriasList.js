import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { capitalize } from '../utils/helpers'
import { callCarregarCategorias } from '../actions'
import { connect } from 'react-redux'

class CategoriasList extends Component {
  componentDidMount() {
    this.props.callCarregarCategorias()
  }

  render() {
    let categorias = this.props.categorias.categorias

    return (
      <section className="categorias-wrapper">
        <h3>Categorias</h3>
        <ul className="categorias-list">
          {categorias !== undefined && categorias.map((categoria) => (
            <li key={categoria.name}><Link to={`/categorias/${categoria.path}`}>{capitalize(categoria.name)}</Link></li>
          ))}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = ({ categorias }) => ({
  categorias
})

export default connect(mapStateToProps, { callCarregarCategorias })(CategoriasList)