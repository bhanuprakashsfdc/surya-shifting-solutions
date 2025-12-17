import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from "./App.jsx";
import "./index.css";

import Layout from './layouts/Layout.jsx';
import Home from './pages/Homepage.jsx';
import NotFound from './pages/NotFound.tsx';
// Inline dynamic city routes directly under <Routes> to satisfy React Router v6
// requirements that children of <Routes> are <Route> or <React.Fragment>.
import cities from './data/cities.js';
import {
  CityService,
  CityServiceParam,
  Packersandmovers,
  Packersandmoversnearme,
  BestPackersandMovers,
  BestPackersandMoversin,
  LocalPackerandMovers,
  LocalPackerandMoversin,
  ProfessionalPackerandMovers,
  ProfessionalPackerandMoversin,
  Packersandmoversnearmein,
} from "@/pages/city/CityPages";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Router future={{ v7_startTransition: true }}>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/index.html" element={<Home />} />
                {/* Dynamic city routes */}
                {/* Param-based dynamic route for city service */}
                <Route path="/packers-and-movers-in-:slug.html" element={<CityServiceParam />} />
                {cities.map((city) => {
                  const formattedCity = city.toLowerCase().replace(/ /g, '-');
                  const path1 = `/packers-and-movers-in-${formattedCity}.html`;
                  const path2 = `/packers-and-movers-${formattedCity}.html`;
                  const path3 = `/packers-and-movers-nearme-${formattedCity}.html`;
                  const path4 = `/best-packers-and-movers-${formattedCity}.html`;
                  const path5 = `/best-packers-and-movers-in-${formattedCity}.html`;
                  const path6 = `/local-packers-and-movers-${formattedCity}.html`;
                  const path7 = `/local-packers-and-movers-in-${formattedCity}.html`;
                  const path8 = `/professional-packers-and-movers-${formattedCity}.html`;
                  const path9 = `/professional-packers-and-movers-in-${formattedCity}.html`;
                  const path10 = `/packers-and-movers-nearme-in-${formattedCity}.html`;
                  return (
                    <React.Fragment key={city}>
                      <Route path={path1} element={<CityService city={city} />} />
                      <Route path={path2} element={<Packersandmovers city={city} />} />
                      <Route path={path3} element={<Packersandmoversnearme city={city} />} />
                      <Route path={path4} element={<BestPackersandMovers city={city} />} />
                      <Route path={path5} element={<BestPackersandMoversin city={city} />} />
                      <Route path={path6} element={<LocalPackerandMovers city={city} />} />
                      <Route path={path7} element={<LocalPackerandMoversin city={city} />} />
                      <Route path={path8} element={<ProfessionalPackerandMovers city={city} />} />
                      <Route path={path9} element={<ProfessionalPackerandMoversin city={city} />} />
                      <Route path={path10} element={<Packersandmoversnearmein city={city} />} />
                    </React.Fragment>
                  );
                })}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </Router>
);
