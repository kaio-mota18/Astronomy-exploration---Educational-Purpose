import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PlanetsScreen from './screens/planets'
import PlanetScreen from './screens/planet'
import PageNotFoundScreen from './screens/notfound'
import ScrollToTop from './components/scrolltotop'
import LandingPageScreen from './screens/about'

const RoutesOfApp = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<PlanetsScreen />} />
        <Route exact path="/about" element={<LandingPageScreen />} />
        <Route exact path="/planet/:id" element={<PlanetScreen />} />
        <Route path="*" element={<PageNotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesOfApp
