import React from "react";
import { Routes, Route } from 'react-router-dom'

import Layout from "./components/Layout/Layout"
import Main from './components/Main/Main'
import Agreement from "./components/Agreement/Agreement";
import Tables from "./components/Table/Tables";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path="agreement" element={<Agreement/>} />
          <Route path="register" element={<Registration/>} />
          <Route path="tables" element={<Tables/>} />
      </Route>
    </Routes>
  );
}

export default App;
