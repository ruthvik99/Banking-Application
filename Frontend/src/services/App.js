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
import AddCustomer from './components/AddCustomer';
import ViewCustomers from './components/ViewCustomer';
import AddBranch from './components/AddBranch';
import ViewBranches from './components/ViewBranches';
import AddAccount from './components/AddAccount';
import ViewAccounts from './components/ViewAccounts';
import AddCreditCard from './components/AddCreditCard';
import ViewCreditCards from './components/ViewCreditCards';
import AddLoan from './components/AddLoan';
import ViewLoans from './components/ViewLoans';

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
              <Route path = "/add-customer" element = {<AddCustomer />} />
              <Route path = "/view-customers" element = {<ViewCustomers />} />
              <Route path = "/add-branch" element = {<AddBranch />} />
              <Route path = "/view-branches" element = {<ViewBranches />} />
              <Route path = "/add-account" element = {<AddAccount />} />
              <Route path = "/view-accounts" element = {<ViewAccounts />} />
              <Route path = "/add-cc" element = {<AddCreditCard />} />
              <Route path = "/view-ccs" element = {<ViewCreditCards />} />
              <Route path = "/add-loan" element = {<AddLoan />} />
              <Route path = "/view-loans" element = {<ViewLoans />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App;