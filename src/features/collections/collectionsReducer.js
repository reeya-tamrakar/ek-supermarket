import { createSlice } from "@reduxjs/toolkit";
export const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        products: [],
        categories: []
    }, 
    reducers:{
        setProducts: (state, action) => {
            state.products = action.payload.products
        },
        setCategories: (state, action) => {
            state.categories = action.payload.categories
        }
    }
})

export const {setProducts, setCategories} = collectionsSlice.actions

export default collectionsSlice.reducer