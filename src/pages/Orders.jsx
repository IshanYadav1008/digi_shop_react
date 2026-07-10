import { useState, useEffect } from 'react'
import API                     from '../services/api'

function Orders() {

  const [orders, setOrders]   = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const response = await API.get('/order/myorders')
      setOrders(response.data)
      setLoading(false)

    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const cancelOrder = async (orderId) => {
    try {
      await API.put(`/order/cancel/${orderId}`)
      alert('Order cancelled!')
      fetchOrders() 

    } catch (err) {
      console.log(err)
      alert('Error cancelling order')
    }
  }

  if (loading)            return <h2>Loading...</h2>
  if (orders.length === 0) return <h2>No orders found</h2>

  return (
    <div>
      <h2>My Orders</h2>

      {orders.map((order) => (
        <div key={order._id}>

          {}
          <p>Order ID      : {order._id}</p>
          <p>Status        : {order.status}</p>
          <p>Payment       : {order.paymentStatus}</p>
          <p>Total Amount  : ₹{order.totalAmount}</p>
          <p>Address       : {order.address}</p>

          {}
          <h4>Items:</h4>
          {order.items.map((item) => (
            <div key={item._id}>
              <p>Product  : {item.product.name}</p>
              <p>Quantity : {item.quantity}</p>
              <p>Price    : ₹{item.price}</p>
            </div>
          ))}

          {}
          {order.status === 'pending' && (
            <button onClick={() => cancelOrder(order._id)}>
              Cancel Order
            </button>
          )}

          <hr />
        </div>
      ))}

    </div>
  )
}

export default Orders