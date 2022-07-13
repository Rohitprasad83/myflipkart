function productReducer(state, action) {
    switch (action.type) {
        case 'LOW_TO_HIGH':
            return {...state, sortBy: 'LOW_TO_HIGH' }
        case 'HIGH_TO_LOW':
            return {...state, sortBy: 'HIGH_TO_LOW' }

        case 'S':
            return {
                ...state,
                size: {...state.size, S: !state.size.S },
            }
        case 'M':
            return {
                ...state,
                size: {...state.size, M: !state.size.M },
            }
        case 'L':
            return {
                ...state,
                size: {...state.size, L: !state.size.L },
            }
        case 'XL':
            return {
                ...state,
                size: {...state.size, XL: !state.size.XL },
            }
        case 'Highlander':
            return {
                ...state,
                brand: {...state.brand, Highlander: !state.brand.Highlander },
            }
        case 'RedTape':
            return {
                ...state,
                brand: {...state.brand, RedTape: !state.brand.RedTape },
            }
        case 'Jockey':
            return {
                ...state,
                brand: {...state.brand, Jockey: !state.brand.Jockey },
            }
        case 'Fila':
            return {
                ...state,
                brand: {...state.brand, Fila: !state.brand.Fila },
            }
        case 'Men':
            return {
                ...state,
                ideal: {...state.ideal, Men: !state.ideal.Men },
            }
        case 'Women':
            return {
                ...state,
                ideal: {...state.ideal, Women: !state.ideal.Women },
            }
        case 'Kids':
            return {
                ...state,
                ideal: {...state.ideal, Kids: !state.ideal.Kids },
            }
        case 'ClearAllFilters':
            return {
                ...state,
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
        default:
            return {...state }
    }
}

export { productReducer }