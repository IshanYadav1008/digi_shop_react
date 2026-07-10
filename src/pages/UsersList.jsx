import { useState, useEffect } from 'react'
import { useAuth }             from '../context/AuthContext'
import API                     from '../services/api'

function UsersList() {

  const [users, setUsers]       = useState([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get('/user') 
        setUsers(response.data)
        setLoading(false)

      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <h2>All Users</h2>

      {users.map((user) => (
        <div key={user._id}>
          <p>Name     : {user.name}</p>
          <p>Email    : {user.email}</p>
          <p>Username : {user.username}</p>
          <p>Role     : {user.role}</p>
          <hr />
        </div>
      ))}

    </div>
  )
}

export default UsersList