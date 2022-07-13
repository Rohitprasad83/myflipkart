import { useCart } from '../context/cart-context'
import React from 'react'
import { Card, Filters, Header } from '../components'
export function Cart() {
  const { cartItems, cartDispatch } = useCart()
  const price = (total, curr) => curr.price * curr.quantity + total
  const totalPrice = cartItems.products.reduce(price, 0)
  const totalDiscount = Math.floor(totalPrice * 0.1)
  const finalAmount = Number(totalPrice) - Number(totalDiscount) - 99
  return (
    <div>
      <Header />
      {cartItems.products.length > 0 && (
        <h1 className="text-center text-3xl bold mb-8">
          {cartItems.products.length} products in cart{' '}
        </h1>
      )}
      <div className="flex flex-row gap-8 justify-center">
        <div className="flex flex-col gap-2">
          {cartItems.products &&
            cartItems.products.map(product => (
              <div key={product.id} className="border-2 w-72 rounded p-2">
                <div className="flex flex-row ">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-32 h-48 object-contain"
                  />
                  <div>
                    <div>{product.title}</div>
                    <div>Size : {product.size.join(', ')}</div>
                    <div className="flex flex-row gap-2">
                      <div>₹ {product.price}</div>
                      <div className="line-through">₹ {product.oldPrice}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full gap-2">
                  <div className="flex flex-row gap-1 items-center">
                    <button
                      className="border-2 rounded w-4 h-8"
                      onClick={() =>
                        cartDispatch({
                          type: 'DECREASE_QUANTITY',
                          payload: product.id,
                        })
                      }>
                      -
                    </button>
                    <div>{product.quantity}</div>
                    <button
                      className="border-2 rounded w-4 h-8"
                      onClick={() =>
                        cartDispatch({
                          type: 'INCREASE_QUANTITY',
                          payload: product.id,
                        })
                      }>
                      +
                    </button>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      cartDispatch({ type: 'REMOVE', payload: product.id })
                      cartDispatch({ type: 'SAVE_FOR_LATER', payload: product })
                    }}>
                    Save For Later
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      cartDispatch({ type: 'REMOVE', payload: product.id })
                    }>
                    Remove
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.products.length > 0 && (
          <div className="border-2 h-max p-4 rounded">
            <div className="">
              Total Price
              <span className="text__right">₹{totalPrice}</span>
            </div>
            <div className="">
              Discount
              <span>₹{totalPrice - finalAmount}</span>
            </div>
            <div className="">
              Delivery Charges
              <span>₹99</span>
            </div>
            <hr />
            <h5 className="">
              Total Amount
              <span className="text__lg">₹{finalAmount + 99}</span>
            </h5>
            <hr />
            <div className="text__md">
              You will save ₹{totalPrice - finalAmount} on this order
            </div>
          </div>
        )}

        {cartItems.products.length < 1 && (
          <h1 className="text-3xl">No products added to Cart</h1>
        )}
      </div>
      {cartItems.savedProducts.length > 0 && (
        <div>
          <h1>Saved Products</h1>
          {cartItems.savedProducts.map(product => (
            <div key={product.id} className="border-2 w-72 rounded p-2">
              <div className="flex flex-row ">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-32 h-48 object-contain"
                />
                <div>
                  <div>{product.title}</div>
                  <div>Size : {product.size.join(', ')}</div>
                  <div className="flex flex-row gap-2">
                    <div>₹ {product.price}</div>
                    <div className="line-through">₹ {product.oldPrice}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full gap-2">
                <div className="flex flex-row gap-1 items-center">
                  <button
                    className="border-2 rounded w-4 h-8"
                    onClick={() =>
                      cartDispatch({
                        type: 'DECREASE_QUANTITY',
                        payload: product.id,
                      })
                    }>
                    -
                  </button>
                  <div>{product.quantity}</div>
                  <button
                    className="border-2 rounded w-4 h-8"
                    onClick={() =>
                      cartDispatch({
                        type: 'INCREASE_QUANTITY',
                        payload: product.id,
                      })
                    }>
                    +
                  </button>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    cartDispatch({ type: 'ADD_TO_CART', payload: product })
                    cartDispatch({
                      type: 'REMOVE_FROM_SAVE',
                      payload: product.id,
                    })
                  }}>
                  Move to Cart
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    cartDispatch({
                      type: 'REMOVE_FROM_SAVE',
                      payload: product.id,
                    })
                  }>
                  Remove
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
