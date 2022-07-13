import React from 'react'
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <header className="w-full sticky top-0 h-24 text-2xl mb-4 flex flex-row bg-blue-600 py-2 justify-center items-center text-white gap-8">
      <Link to="/" className="justify-self-start">
        Flipkart Clone
      </Link>
      <div>
        <input
          type="text"
          className="w-64 rounded px-2 text-black"
          placeholder="Search"
        />
      </div>
      <div>
        <button className="w-24 h-8 bg-white text-blue-600 px-2 rounded text-lg">
          Login
        </button>
      </div>
      <Link to="/cart" className="cursor-pointer">
        Cart
      </Link>
    </header>
  )
}
