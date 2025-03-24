import { Routes, Route } from 'react-router-dom';  
import LandingPage from '../Components/LandingPage'; 
import UserLogin from '../Components/UserLogin';
import Dashboard from '../Components/Dashboard';
import Card from '../Components/Card';
const AppRoutes = () => {
  return (
    <Routes>
    
      <Route path="/" element={<LandingPage />} > </Route>
      <Route path="/user-login" element={<UserLogin />}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/direct/user/:id' element={<Card/>}></Route>
    </Routes>
  );
};

export default AppRoutes;
