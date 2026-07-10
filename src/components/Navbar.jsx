import { useAuth }     from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Link }        from 'react-router-dom'

function Navbar() {

  const { token, removeToken } = useAuth()
  const navigate               = useNavigate()

  const handleLogout = () => {
    removeToken()       
    navigate('/login')  
  }

  const payload = token ? JSON.parse(atob(token.split('.')[1])) : null

  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/products'>Products</Link> 

      {token ? (
        <>
        <Link to='/cart'>Cart</Link>
        <Link to='/orders'>Orders</Link> 
        <Link to='/profile'>Profile</Link>

        {payload?.role === 'admin' && (
          <Link to='/users'>Users List</Link>  
          )}

        <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </>
      )}
    </nav>
  )
}

export default Navbar