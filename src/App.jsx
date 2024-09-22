import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PhoneNumber from './pages/PhoneNumber';
import Otp from './pages/Otp';
import SearchBus from './pages/SearchBus';
import SearchBusResult from './pages/SearchBusResult';
import BusRoute from './pages/BusRoute';
import StaffPage from './pages/StaffPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phoneNumber" element={<PhoneNumber />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/SearchBus" element={<SearchBus />} />
        <Route path="/SearchBusResult" element={<SearchBusResult />} />
        <Route path="/bus/:busNumber" element={<BusRoute />} />
        <Route path="/StaffPage" element={<StaffPage />} />

        {/* Dynamic route for bus details */}
      </Routes>
    </Router>
  );
}

export default App;
