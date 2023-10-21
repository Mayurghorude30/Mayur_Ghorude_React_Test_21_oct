import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext';
import "./App.css"
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;