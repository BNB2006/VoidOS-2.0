import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SystemProvider } from './Context/SystemContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SystemProvider>
      <App />
    </SystemProvider>
  </StrictMode>,
)
