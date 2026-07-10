import { useState }    from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth }     from '../context/AuthContext' 
import API             from '../services/api'

function Signup() {

  const { saveToken } = useAuth()  
  const navigate      = useNavigate()

  const [formData, setFormData] = useState({
    name    : '',
    email   : '',
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
      const response = await API.post('/user/signup', formData)
      saveToken(response.data.token)  
      navigate('/')

    } catch (err) {
      console.log(err.response.data) 
    }
  }

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type        = "text"
            name        = "name"
            value       = {formData.name}
            onChange    = {handleChange}
            placeholder = "Enter name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type        = "email"
            name        = "email"
            value       = {formData.email}
            onChange    = {handleChange}
            placeholder = "Enter email"
          />
        </div>

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

        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup