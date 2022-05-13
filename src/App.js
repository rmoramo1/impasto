import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/css/master.scss';


import Loader from './components/loader';
const Header = lazy(() => import('./components/header'));
const Footer = lazy(() => import('./components/footer'));
const Home = lazy(() => import('./pages/home'));
const Nosotros = lazy(() => import('./pages/nosotros'));
const Menu = lazy(() => import('./pages/menu'));
const Contacto = lazy(() => import('./pages/contacto'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Header />
          <div className="span_yellow"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
