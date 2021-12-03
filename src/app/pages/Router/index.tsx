import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '../../../atomic'
import { Homepage } from '../Homepage'
import { InfoPage } from '../InfoPage'
import { PeoplePage } from '../PeoplePage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.base} element={<Homepage />} />
        <Route path={routes.people} element={<PeoplePage />} />
        <Route path={routes.peopleInfo} element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
