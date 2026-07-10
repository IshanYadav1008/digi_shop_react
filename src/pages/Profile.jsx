import { useState, useEffect } from 'react'
import API                     from '../services/api'

function Profile() {

  const [user, setUser]       = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get('/user/profile')
        setUser(response.data.user)
        setLoading(false)

      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading) return <h2>Loading...</h2>
  if (!user)   return <h2>User not found</h2>

  return (
    <div>
      <h2>My Profile</h2>
      <p>Name     : {user.name}</p>
      <p>Email    : {user.email}</p>
      <p>Username : {user.username}</p>
      <p>Role     : {user.role}</p>
    </div>
  )
}

export default Profile