import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import Board from './containers/Board/Board'

import './styles.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  
  <Provider store={store}>
      <Board />
  </Provider>
  , rootElement)
