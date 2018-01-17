import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// TODO: Pq não funciona?
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
// const store = createStore(
//   reducer,
//   composeEnhancers(applyMiddleware(thunk))
// )

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App/></BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
