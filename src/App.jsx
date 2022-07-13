import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ProductListing } from './pages/ProductListing'
import { Cart } from './pages/Cart'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
