import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from '../../../atomic'
import { Homepage } from '../Homepage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.base} element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
