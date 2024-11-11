import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import LandingPage  from './pages/landingpage';
import Menu from './pages/menu';
import Suitable from './pages/suitable';
import OrderApps from './pages/orderapps';
import Footer from './components/footer';
import Features from './pages/features';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <LandingPage></LandingPage>
    <Features></Features>
    <Menu></Menu>
    <Suitable></Suitable>
    <OrderApps></OrderApps>
    <Footer></Footer>
  </React.StrictMode>
);