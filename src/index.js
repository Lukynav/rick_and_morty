import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './global.css'

// Where I render my content
const root = ReactDOM.createRoot(document.getElementById('root'))

// What I render
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
