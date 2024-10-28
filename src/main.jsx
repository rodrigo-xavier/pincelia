// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Replace from './replace.jsx';
import Share from './share.jsx';
import SocialMedia from './socialmedia.jsx';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <SocialMedia />
      <Replace />
      <App />
      <Share />
      <Routes>
        <Route path="/us" />
        <Route path="/pt" />
      </Routes>
    </Router>
  </StrictMode>
);
