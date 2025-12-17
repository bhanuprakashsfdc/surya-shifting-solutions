import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from "./App.jsx";
import "./index.css";

import Layout from './layouts/Layout.jsx';
import Home from './pages/Homepage.jsx';
import NotFound from './pages/NotFound.tsx';
import Approutes from './routes/Approutes.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Router future={{ v7_startTransition: true }}>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/index.html" element={<Home />} />
                <Approutes />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </Router>
);
