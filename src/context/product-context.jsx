import { createContext, useContext, useReducer } from 'react'
import { productReducer } from '../reducer/productReducer'

const ProductFilterContext = createContext()
const useProductFilter = () => useContext(ProductFilterContext)

const initialFilters = {
  size: {
    S: false,
    M: false,
    L: false,
    XL: false,
  },
  brand: {
    Highlander: false,
    RedTape: false,
    Jockey: false,
    Fila: false,
  },
  ideal: {
    Men: false,
    Women: false,
    Kids: false,
  },
  sortBy: null,
}
const ProductFilterProvider = ({ children }) => {
  const [filters, productDispatch] = useReducer(productReducer, initialFilters)
  return (
    <ProductFilterContext.Provider value={{ filters, productDispatch }}>
      {' '}
      {children}{' '}
    </ProductFilterContext.Provider>
  )
}

export { ProductFilterProvider, useProductFilter }
