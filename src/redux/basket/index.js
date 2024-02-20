import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("basket") || "{}")

const saveLocalStorage = (data) => {
    localStorage.setItem("basket", JSON.stringify(data))
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            state[action.payload.id] = {
                ...action.payload,
                quantity: 1
            }
            saveLocalStorage(state)
        },
        deleteBasket: (state, action) => {
            delete state[action.payload]
            saveLocalStorage(state)
        },
        addQuantity: (state, action) => {
            state[action.payload].quantity++
            saveLocalStorage(state)
        },
        deleteQuantity: (state, action) => {
            if (state[action.payload].quantity > 1) {
                state[action.payload].quantity--
                saveLocalStorage(state)
            }
        }
    }
})
export const { addBasket, deleteBasket, addQuantity, deleteQuantity } = basketSlice.actions
export default basketSlice.reducer