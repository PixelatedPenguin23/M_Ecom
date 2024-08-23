const { createSlice } = require("@reduxjs/toolkit");

const cartSlice=createSlice({
  name:'cart',
  initialState:{
    items:[],
  },
  reducers:{
    addC(state,action){
      const item=action.payload;
      const eItem=state.items.find(i=>i.id===item.id)
      if (eItem){
        eItem.quantity+=1

      }
      else{
        state.items.push({...item,quantity:1})
      }
    },
    remC(state,action){
      const id=action.payload
      state.items=state.items.filter((e)=>e.id!==id)
    },
    upC(state,action){
      const{id,quantity}=action.payload
      const item=state.items.find((e)=>e.id===id)
      if (item){
        item.quantity=quantity
      }
    }
  }
})

export const {addC,remC,upC} = cartSlice.actions
export default cartSlice.reducer
export const cartItems=(state)=>state.cart.items