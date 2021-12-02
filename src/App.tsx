import React from 'react'
import { GlobalContextProvider } from './app/context'
import Router from './app/pages/Router'

const App = () => {
  return (
    <GlobalContextProvider>
      <Router />
    </GlobalContextProvider>
  )
}

export default App
