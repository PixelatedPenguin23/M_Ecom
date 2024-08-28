const { configureStore } = require("@reduxjs/toolkit");
import shopReducer from './itemsSlice'
import cartReducer from './cartSlice'



export const storeR=()=>{
  return configureStore({
   reducer:{ 
    shop:shopReducer,
    cart:cartReducer,
   }
})
}

