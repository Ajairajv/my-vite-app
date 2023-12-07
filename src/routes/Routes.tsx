import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from '../pages/Home';
import RedirectPage from '../pages/RedirectPage';
import Firstpage from '../pages/Firstpage';

const RoutePages = () => {
  return (
    <Router>
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/redirect-page" element={<RedirectPage />} />
            <Route path="/SecondPage" element={<Firstpage />} />

        </Routes>
    </Router>
  )
}

export default RoutePages
