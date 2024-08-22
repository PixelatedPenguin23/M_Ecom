const { products } = require("@public/assets");
const { createSlice } = require("@reduxjs/toolkit");

const shopSlice=createSlice({
  name:'shop',
  initialState:{items:products},
  reducers:{}
})

export const selectItems=(state)=>state.shop.items
export default shopSlice.reducer