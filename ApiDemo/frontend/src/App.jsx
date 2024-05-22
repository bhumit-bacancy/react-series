import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  // const[products, error, loading] = customReactQuery('/api/products')

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setsSearch] = useState("")


  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(`/api/products?search=${search}`)
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()
  }, [])

  if(error) {
    return <h1>Something went wrong</h1>
  }

  if (loading) {
    return <h1>Loading......</h1>
  }

  return (
    <>
      <h1>Chai or Api in react</h1>
      <input type='text' placeholder='search' onChange={(e) => {setsSearch(e.target.value)}}/>
      <h2>Number of products are: {products.length}</h2>
    </>
  )
}

export default App


const customReactQuery = (urlPath) => {
  
  return [products, error, loading]
}