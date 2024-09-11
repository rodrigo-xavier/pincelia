import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Replace from './replace.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Replace />
    <App />
  </StrictMode>,
)
