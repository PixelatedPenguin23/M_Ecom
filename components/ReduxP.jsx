'use client'
import { persistor, store } from '@redux/store'
import React from 'react'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

const ReduxP = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxP