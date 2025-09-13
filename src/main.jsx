import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SystemProvider } from './context/SystemContext.jsx'
import { VolumeProvider } from './context/volumeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <VolumeProvider>
      <SystemProvider>
        <App />
      </SystemProvider>
        </VolumeProvider>
  </StrictMode>,
)
