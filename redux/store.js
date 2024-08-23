const { configureStore } = require("@reduxjs/toolkit");
import shopReducer from './itemsSlice'
import cartReducer from './cartSlice'

const store=configureStore({
  reducer:{
    shop:shopReducer,
    cart:cartReducer,
  }
})

export default store