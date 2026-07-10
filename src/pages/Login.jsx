import { useState }    from 'react'
import { useNavigate } from 'react-router-dom'  
import { useAuth }     from '../context/AuthContext'  
import API             from '../services/api'

function Login() {

  const { saveToken } = useAuth()      
  const navigate      = useNavigate()  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await API.post('/user/login', formData)
      saveToken(response.data.token)  
      navigate('/')                   

    } catch (err) {
      console.log(err.response.data) 
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type        = "text"
            name        = "username"
            value       = {formData.username}
            onChange    = {handleChange}
            placeholder = "Enter username"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type        = "password"
            name        = "password"
            value       = {formData.password}
            onChange    = {handleChange}
            placeholder = "Enter password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login