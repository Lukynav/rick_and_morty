import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import './global.css'
import { Provider } from 'react-redux'
import store from './redux/store'

// Where I render my content
const root = ReactDOM.createRoot(document.getElementById('root'))

// What I render
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
)
