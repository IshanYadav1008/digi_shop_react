import { useState, useEffect } from 'react'
import API                     from '../services/api'
import { useNavigate }         from 'react-router-dom'

function Cart() {

  const [cart, setCart]       = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate              = useNavigate()

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
    try {
      const response = await API.get('/cart')
      setCart(response.data)
      setLoading(false)

    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const removeItem = async (itemId) => {
    try {
      await API.delete(`/cart/${itemId}`)
      fetchCart() 
    } catch (err) {
      console.log(err)
    }
  }

  const updateQuantity = async (itemId, newQuantity) => {
    try {
      await API.put(`/cart/${itemId}`, { quantity: newQuantity })
      fetchCart() 
    } catch (err) {
      console.log(err)
    }
  }

  const placeOrder = async () => {
    try {
      const address = prompt('Enter delivery address:')

      if (!address) return 

      await API.post('/order', { address })
      alert('Order placed successfully!')
      navigate('/orders')

    } catch (err) {
      console.log(err)
      alert('Error placing order')
    }
  }

  if (loading)              return <h2>Loading...</h2>
  if (!cart || cart.items.length === 0) return <h2>Cart is empty</h2>

  return (
    <div>
      <h2>My Cart</h2>

      {cart.items.map((item) => (
        <div key={item._id}>

          {}
          <h3>{item.product.name}</h3>
          <p>Price : ₹{item.product.price}</p>

          {}
          <p>
            Quantity :
            <button onClick={() => updateQuantity(item._id, item.quantity - 1)}
              disabled={item.quantity <= 1}  
            > - </button>

            {item.quantity}

            <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>
              +
            </button>
          </p>

          {}
          <p>Subtotal : ₹{item.product.price * item.quantity}</p>

          {}
          <button onClick={() => removeItem(item._id)}>
            Remove
          </button>

          <hr />
        </div>
      ))}

      {}
      <h3>
        Total : ₹{cart.items.reduce((total, item) => {
          return total + (item.product.price * item.quantity)
        }, 0)}
      </h3>

      {}
      <button onClick={placeOrder}>Place Order</button>

    </div>
  )
}

export default Cart