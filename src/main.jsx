import { StrictMode }    from 'react'
import { createRoot }    from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider }  from './context/AuthContext'  // ← import karo
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>   {/* ← App ko wrap karo */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
