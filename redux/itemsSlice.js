const { products } = require("@public/assets");
const { createSlice } = require("@reduxjs/toolkit");

const itemSlice=createSlice({
  name:'shop',
  initialState:{
    items:products
  },
  reducers:{}
})
export default itemSlice.reducer
export const all=(state)=>state.shop.items