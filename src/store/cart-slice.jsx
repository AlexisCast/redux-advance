import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem() {},
    removeItem() {}
  }
});

export const cartActions = cartSlice.actions;

//cartReducers
export default cartSlice.reducer;
