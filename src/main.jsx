import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Replace from './replace.jsx'
import './index.css'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <Replace />
    <App />
  </StrictMode>
);