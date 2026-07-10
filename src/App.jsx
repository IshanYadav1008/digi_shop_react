import { Routes, Route }  from 'react-router-dom'
import ProtectedRoute     from './components/ProtectedRoute'
import Navbar             from './components/Navbar'  
import Login              from './pages/Login'
import Signup             from './pages/Signup'
import Home               from './pages/Home'
import Profile            from './pages/Profile'
import AdminRoute         from './components/AdminRoute'  
import UsersList          from './pages/UsersList'   
import Products           from './pages/Products'   
import Cart               from './pages/Cart'
import Orders             from './pages/Orders'



function App() {
  return (
    <>
      <Navbar />  {/* ← har page pe dikhega */}

      <Routes>
        {/* Public Routes */}
        <Route path='/login'  element={<Login />}  />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />

        {/* Protected Routes */}
        <Route path='/' element={        
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        {/* Protected Routes */}
        <Route path='/profile' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        // Protected route
        <Route path='/cart' element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />

        <Route path='/orders' element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        } />

        <Route path='/users' element={
          <AdminRoute>
            <UsersList />
          </AdminRoute>
        } />
      </Routes>
    </>
  )
}

export default App