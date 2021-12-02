import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '../../../atomic'
import { Homepage } from '../Homepage'
import { PeoplePage } from '../PeoplePage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.base} element={<Homepage />} />
        <Route path={routes.people} element={<PeoplePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
