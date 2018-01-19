import React, { Component } from 'react'
import '../index.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CategoriasList from './CategoriasList'
import PostsTable from './PostsTable'
import CriarPostagem from './CriarPostagem'
import EditarPostagem from './EditarPostagem'
import EditarComentario from './EditarComentario'
import Post from './Post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1><Link to="/">Reaccit</Link></h1>
        </header>
        <Route exact path='/' render={(props) => (
          <main>
            <CategoriasList {...props}/>
            <PostsTable {...props}/>
          </main>
        )}/>
        <Route exact path='/categorias/react' render={() => (
          <main>
            <div className="voltar-btn-wrapper">
              <button><Link to="/">Voltar</Link></button>
            </div>
            <section className="main-content">
              <div className="h3-wrapper">
                <h3>React</h3>
                <div className="ordenar-por">
                  <label>Ordenar por:</label>
                  <select>
                    <option value="">Selecione</option>
                    <option value="data">Data</option>
                    <option value="votos">Votos</option>
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
                  <tr>
                    <td>React post</td>
                    <td>React</td>
                    <td>Guizo</td>
                    <td>02/01/2018</td>
                    <td>10</td>
                    <td>
                      <button style={{ 'margin-right': '5px' }}><Link to="/ver">Ver</Link></button>
                      <button><Link to="/postagem/editar">Editar</Link></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </main>
        )}/>
        <Route path='/postagem/criar' component={CriarPostagem}/>
        <Route path='/postagem/:id/ver' component={Post}/>
        <Route path='/postagem/:id/editar' component={EditarPostagem}/>
        <Route path='/comentario/:id/editar' component={EditarComentario}/>
      </div>
    );
  }
}

export default App;