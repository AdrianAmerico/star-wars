import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from '../../../atomic'
import { Homepage } from '../Homepage'
import { PlanetPage } from '../PlanetPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.base} element={<Homepage />} />
        <Route path={routes.planet} element={<PlanetPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router
