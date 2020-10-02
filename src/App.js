import React from 'react';
import { BrowserRouter } from "react-router-dom";
// import styles from './App.module.css';

import PublicRoutes from "./components/routes/PublicRoutes"

import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default App;
