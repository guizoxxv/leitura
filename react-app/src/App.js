import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1><Link to="/">Reaccit</Link></h1>
        </header>
        <Route exact path='/' render={() => (
          <main>
            <section className="categorias-wrapper">
              <h3>Categorias</h3>
              <ul className="categorias-list">
                <li><Link to="/react">React</Link></li>
                <li><Link to="/redux">Redux</Link></li>
                <li><Link to="/udacity">Udacity</Link></li>
              </ul>
            </section>
            <section className="main-content">
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
                <button id="nova-postagem-btn">Nova Postagem</button>
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
                      <button style={{ 'margin-right': '5px' }}><Link to="#">Ver</Link></button>
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
                      <button style={{ 'margin-right': '5px' }}><Link to="#">Ver</Link></button>
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
                      <button style={{ 'margin-right': '5px' }}><Link to="#">Ver</Link></button>
                      <button><Link to="/editar">Editar</Link></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </main>
        )} />
        <Route exact path='/react' render={() => (
          <main>
            <div className="voltar-btn-wrapper">
              <button><Link to="/">Voltar</Link></button>
            </div>
            <section className="main-content">
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
                      <button style={{ 'margin-right': '5px' }}><Link to="#">Ver</Link></button>
                      <button><Link to="/editar">Editar</Link></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </main>
        )} />
        <Route path='/ver' render={() => (
          <main>
            <section className="main-content">
              <h3>Editar Postagem</h3>
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
        )} />
        <Route path='/editar' render={() => (
          <main>
            <div className="voltar-btn-wrapper">
              <button><Link to="/">Voltar</Link></button>
            </div>
            <section className="main-content centered">
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
        )} />
      </div>
    );
  }
}

export default App;