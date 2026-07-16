import { useState, useEffect } from 'react'
import API                     from '../services/api'
import { useAuth }             from '../context/AuthContext'

function Products() {

  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(true)
  const { token }               = useAuth()

  const addToCart = async (productId) => {
    try {
      await API.post('/cart', {
        productId: productId,
        quantity : 1
      })
      alert('Product added to cart!')

    } catch (err) {
      console.log(err)
      alert('Error adding to cart')
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get('/product')
        
        console.log("API Response:", response.data);

        setProducts(response.data)
        setLoading(false)

      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product._id}>

      <img
            src={product.image !== 'default-product.png' 
              ? product.image 
              : 'https://via.placeholder.com/200'}
            alt={product.name}
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />

          <h3>{product.name}</h3>
          <p>Price    : ₹{product.price}</p>
          <p>Category : {product.category}</p>
          <p>Stock    : {product.stock}</p>

          {token && (
            <button onClick={() => addToCart(product._id)}>
              Add to Cart
            </button>
          )}
          <hr />
        </div>
      ))}

    </div>
  )
}

export default Products