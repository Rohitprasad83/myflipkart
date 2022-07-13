import React from 'react'
export function Filters() {
  const sizes = ['S', 'M', 'L', 'XL']
  const brands = ['Highlander', 'RedTape', 'Jockey', 'Fila']
  const ideals = ['Men', 'Women', 'Kids']

  return (
    <div className="w-64 border-2 flex flex-col gap-2 rounded p-4 ml-4">
      <p className="flex flex-row justify-between">
        <span>Filters</span>
        <span className="cursor-pointer">Clear All</span>
      </p>
      <p>Size</p>
      <div className="flex flex-col">
        {sizes.map((size, index) => (
          <label key={index}>
            <input type="checkbox" />
            {size}
          </label>
        ))}
      </div>

      <p>Brand</p>
      <div className="flex flex-col">
        {brands.map((brand, index) => (
          <label key={index}>
            <input type="checkbox" />
            {brand}
          </label>
        ))}
      </div>

      <p>Ideal For</p>
      <div className="flex flex-col">
        {ideals.map((ideal, index) => (
          <label key={index}>
            <input type="checkbox" />
            {ideal}
          </label>
        ))}
      </div>

      <p>Sort By Price</p>
      <div className="flex flex-col">
        <label>
          <input type="radio" name="priceSort" />
          Low to High
        </label>
        <label>
          <input type="radio" name="priceSort" />
          High to Low
        </label>
      </div>
    </div>
  )
}
