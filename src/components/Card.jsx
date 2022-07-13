import { useCart } from '../context/cart-context'
import React from 'react'
import { Link } from 'react-router-dom'
export function Card({ product }) {
  const { id, title, brand, price, oldPrice, discount, size, img } = product
  const { cartItems, cartDispatch } = useCart()

  function containsInCart() {
    return cartItems.products.some(product => product.id === id)
  }
  return (
    <div className="flex flex-col border-2 rounded">
      <img src={img} alt="mens Jeans" className="w-64 h-64 object-contain	" />
      <p className="font-bold	">{title}</p>
      <p>{brand}</p>
      <div className="flex flex-row gap-1">
        <span>₹{price}</span>
        <span className="line-through font-light">₹{oldPrice}</span>
        <span>{discount}% off</span>
      </div>
      <p>Size {size.join(', ')}</p>
      <div className="flex-row gap-1 center">
        {containsInCart(id, cartItems) ? (
          <Link
            to="/cart"
            className="w-full block bg-yellow-400 rounded h-8 cursor-pointer flex items-center justify-center">
            Go to Cart
          </Link>
        ) : (
          <button
            className="w-full bg-yellow-400 rounded h-8"
            onClick={() =>
              cartDispatch({ type: 'ADD_TO_CART', payload: product })
            }>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}
