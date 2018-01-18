import React, { Component } from 'react'
import '../index.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CategoriasList from './CategoriasList'
import PostsTable from './PostsTable'
import CriarPostagem from './CriarPostagem'
import EditarPostagem from './EditarPostagem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1><Link to="/">Reaccit</Link></h1>
        </header>
        <Route exact path='/' render={() => (
          <main>
            <CategoriasList/>
            <PostsTable/>
          </main>
        )} />
        <Route exact path='/react' render={() => (
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
                      <button style={{ 'margin-right': '5px' }}><Link to="/ver">Ver</Link></button>
                      <button><Link to="/editar">Editar</Link></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </main>
        )} />
        <Route path='/criar' render={() => (
          <CriarPostagem/>
        )} />
        <Route path='/ver' render={() => (
          <main>
            <div className="voltar-btn-wrapper">
              <button><Link to="/">Voltar</Link></button>
            </div>
            <section className="main-content">
              <div className="post-header">
                <div>
                  <h3>React Post</h3>
                  <span className="small">Por Guizo em 02 de Janeiro de 2018</span>
                  <Link className="categoria-item" to="#">React</Link>
                </div>
                <div className="votes-wrapper">
                  <span>10 votos</span>
                  <button>+1</button>
                </div>
              </div>
              <hr/>
              <div className="post-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div>
                <button style={{'margin-right':'5px'}}>Editar</button>
                <button>Remover</button>
              </div>
              <hr/>
              <ul className="comentarios-wrapper">
                <li className="comentario">
                  <div><b>User #1 em 03 de Janeiro de 2018:</b></div>
                  <div className="comentario-body">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  <div className="comentario-footer">
                    <div>
                      <button style={{'margin-right':'5px'}}>Editar</button>
                      <button>Remover</button>
                    </div>
                    <div className="votes-wrapper">
                      <span>5 votos</span>
                      <button>+1</button>
                    </div>
                  </div>
                  <hr/>
                </li>
                <li className="comentario">
                  <div><b>User #2 em 04 de Janeiro de 2018:</b></div>
                  <div className="comentario-body">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                  <div className="comentario-footer">
                    <div>
                      <button style={{'margin-right':'5px'}}>Editar</button>
                      <button>Remover</button>
                    </div>
                    <div className="votes-wrapper">
                      <span>5 votos</span>
                      <button>+1</button>
                    </div>
                  </div>
                  <hr/>
                </li>
              </ul>
              <hr/>
              <div className="add-comentario">
                <div style={{'margin-bottom':'10px'}}><b>Comentar</b></div>
                <input type="text" placeholder="Autor" style={{'margin-bottom':'10px'}}/>
                <br/>
                <textarea placeholder="Corpo do comentário"></textarea>
                <br/>
                <button>Comentar</button>
              </div>
            </section>
          </main>
        )} />
        <Route path='/editar' render={() => (
          <EditarPostagem/>
        )} />
      </div>
    );
  }
}

export default App;