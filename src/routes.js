import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PlanetScreen from './screens/planets'

const RoutesOfApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PlanetScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesOfApp
