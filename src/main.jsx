import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProductFilterProvider } from './context/product-context'
import { CartContextProvider } from './context/cart-context'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductFilterProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductFilterProvider>
  </BrowserRouter>
)
