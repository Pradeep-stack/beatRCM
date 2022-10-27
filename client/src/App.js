import './App.css';
import React, { useState, useEffect } from 'react';
import './assets/css/Style.css';
import './assets/css/sb-admin-2.min.css';
import './assets/vendor/fontawesome-free/css/all.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage/Loginpage';
import ForgotePossword from './components/ForgotePassword/ForgotePossword';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const [data, setUser] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        {data?.status === 'success' ? (
          <Routes>
            <Route
              path="/forgot-password"
              element={<ForgotePossword></ForgotePossword>}
            ></Route>
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Loginpage></Loginpage>}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
