import { useAuth }  from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function AdminRoute({ children }) {

  const { token } = useAuth()

  const payload = token ? JSON.parse(atob(token.split('.')[1])) : null

  if (!token || payload.role !== 'admin') {
    return <Navigate to='/' /> 
  }

  return children
}

export default AdminRoute