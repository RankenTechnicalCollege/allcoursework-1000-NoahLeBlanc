import { StrictMode } from 'react';
/*This is what gives us React*/
import { createRoot } from 'react-dom/client';
/*This is Reacts DOM*/
import './index.css'
/*This is where the styles are*/
import App from './App.jsx'
/*The X component we created*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
