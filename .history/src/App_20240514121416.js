import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

import Login from './pages/Login';
import Tasks from './pages/Tasks';


function App() {
  return (
    // <div>
    //   <h1 style={{ textAlign: 'center' }}>My Tasks</h1>
    //   <Login />
    // </div>
    <div>
    <Router baseline="/">
      <Routes>
        <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="tasks" element={<Tasks />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
