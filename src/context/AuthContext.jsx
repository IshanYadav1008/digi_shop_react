import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem('token') || null)

  const saveToken = (newToken) => {
    setToken(newToken)
    localStorage.setItem('token', newToken) 
  }

  const removeToken = () => {
    setToken(null)
    localStorage.removeItem('token') 
  }

  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)