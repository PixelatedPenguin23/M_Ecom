'use client'
import storez from '@redux/store'
import React from 'react'
import { Provider } from "react-redux";

const ReduxP = ({children}) => {
  return (
    <Provider store={storez}>
      {children}
    </Provider>
  )
}

export default ReduxP