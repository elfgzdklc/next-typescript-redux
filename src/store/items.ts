import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ItemState {
    items: string[]
}

const initialState: ItemState = {
    items: []
}

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload)
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.items.splice(action.payload, 1)
        },
        editItem: (state, action: PayloadAction<{ index: number; newItem: string }>) => {
            state.items[action.payload.index] = action.payload.newItem
        }
    }
})
export const {addItem, deleteItem,editItem} = itemsSlice.actions;
export default itemsSlice.reducer;