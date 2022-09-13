import React from "react";
import { Routes, Route} from 'react-router-dom'

import Layout from "./components/Layout/Layout"
import Main from './components/Main/Main'
import Agreement from "./components/Agreement/Agreement";
import Registration from "./components/Registration/Registration";
import Introduction from "./components/Introduction/Introduction";
import Instruction from "./components/Instruction/Instruction"
import Tables from "./components/Table/Tables";
import Final from "./components/Final/Final";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path="agreement" element={<Agreement/>} />
          <Route path="register" element={<Registration/>} />
          <Route path="introduction" element={<Introduction/>} />
          <Route path="instruction" element={<Instruction/>} />
          <Route path="tables" element={<Tables/>} />
          <Route path="final" element={<Final/>} />
      </Route>
    </Routes>
  );
}

export default App;
