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
        <Route exact path='/categorias/:categoria' render={(props) => (
          <main>
            <CategoriasList {...props}/>
            <PostsTable {...props}/>
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