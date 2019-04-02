import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer.js';
import { BrowserRouter as Router } from 'react-router-dom'
import { ActionCableProvider } from 'react-actioncable-provider'
import { ENDPOINT_URL } from '../adapter'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <ActionCableProvider url={`wss://${ENDPOINT_URL}/cable`}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ActionCableProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
