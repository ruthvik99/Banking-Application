import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Profile from './components/Profile';
import Deposit from './components/Deposit';
import Loan from './components/Loan';
import PrivateRoute from './components/PrivateRoute'; // Make sure this file exists
import './App.css';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route 
                    path="/dashboard" 
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/dashboard/profile" 
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/dashboard/deposit" 
                    element={
                        <PrivateRoute>
                            <Deposit />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/dashboard/loan" 
                    element={
                        <PrivateRoute>
                            <Loan />
                        </PrivateRoute>
                    } 
                />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App;