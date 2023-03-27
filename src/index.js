import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'

// Where I render my content
const root = ReactDOM.createRoot(document.getElementById('root'))

// What I render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
