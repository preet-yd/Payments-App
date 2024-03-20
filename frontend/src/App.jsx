import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import axios from 'axios';
import Protected from './pages/Protected';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Protected Component={SignUp}/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Protected Component={Dashboard}/>} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
