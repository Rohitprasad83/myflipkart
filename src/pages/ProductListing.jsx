import React from 'react'

import { Card, Filters, Header } from '../components'
import data from '../assets/data.json'
export function ProductListing() {
  const productData = JSON.parse(JSON.stringify(data))
  return (
    <div>
      <Header />
      <main className="flex flex-row gap-1 mb-4">
        <Filters />
        <div className="flex flex-row gap-2 flex-wrap">
          {productData.products &&
            productData.products.map(product => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </main>
    </div>
  )
}
