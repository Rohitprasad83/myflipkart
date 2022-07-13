import { useCart } from '../context/cart-context'
import React from 'react'
export function Card({ product }) {
  const { id, title, brand, price, oldPrice, discount, size, img } = product
  const { cartItems, cartDispatch } = useCart()

  function containsInCart() {
    return cartItems.products.some(product => product.id === id)
  }
  console.log(cartItems)
  return (
    <div className="card flex-col">
      <img src={img} alt="mens Jeans" />
      <p className="bold">{title}</p>
      <p>{brand}</p>
      <div className="flex-row gap-1">
        <span>₹{price}</span>
        <span className="old-price">₹{oldPrice}</span>
        <span>{discount}% off</span>
      </div>
      <p>Size {size.join(', ')}</p>
      <div className="flex-row gap-1 center">
        <button>Add to Wishlist</button>

        {containsInCart(id, cartItems) ? (
          <button
            onClick={() =>
              cartDispatch({ type: 'INCREASE_QUANTITY', payload: id })
            }>
            Add to Cart
          </button>
        ) : (
          <button
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
