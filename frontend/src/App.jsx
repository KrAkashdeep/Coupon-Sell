import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CouponList from './pages/CouponList';
import LandingPage from './components/Dashboard/LandingPage';
import SellCoupons from './components/Dashboard/SellCoupons';
import Profile from './components/Dashboard/Profile';
import BuyCoupons from './components/Dashboard/BuyCoupons';
import AllPurchase from './components/Dashboard/AllPurchase';
import MySellList from './components/Dashboard/MySellList';
import Setting from './components/Dashboard/Setting';
import HowWork from './pages/HowWork';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<LandingPage />} />
          <Route path="sell" element={<SellCoupons />} />
          <Route path="buy" element={<BuyCoupons/>}/>
          <Route path="profile" element={<Profile />} />
          <Route path="purchases" element={<AllPurchase/>}/>
          <Route path="listings" element={<MySellList/>}/>
          <Route path="settings" element={<Setting/>}/>
        </Route>
        <Route path="/browse" element={<CouponList/>}/>
        <Route path='/howWork' element={<HowWork/>}/>
      </Routes>
    </Router>
  );
}

export default App;
