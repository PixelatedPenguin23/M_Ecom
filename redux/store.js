const { configureStore } = require("@reduxjs/toolkit");
import shopReducer from './itemsSlice'
import cartReducer from './cartSlice'
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';



const persistConfig = {
  key: 'root',
  
  storage,
};

const storeR={
  
    shop:shopReducer,
    cart:cartReducer,
  
}

const persisted=persistReducer(persistConfig,combineReducers(storeR))
const store=configureStore({
  reducer:persisted,
  
})
const persistor=persistStore(store)

export {store,persistor}