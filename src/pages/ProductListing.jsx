import React from 'react'

import { Card, Filters, Header } from '../components'
import data from '../assets/data.json'
export function ProductListing() {
  const productData = JSON.parse(JSON.stringify(data))
  return (
    <div>
      <Header />
      <main className="flex-row gap-1">
        <Filters />
        <div className="card-container flex-row">
          {productData.products &&
            productData.products.map(product => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </main>
    </div>
  )
}
