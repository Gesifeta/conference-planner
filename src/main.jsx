import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

//this section contains the main app

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
