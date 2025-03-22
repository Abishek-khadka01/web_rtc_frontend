import { Routes, Route } from 'react-router-dom';  // Correct import for v7+
import LandingPage from '../Components/LandingPage'; // Assuming you have this component

const AppRoutes = () => {
  return (
    <Routes>
      {/* Define a route for the landing page */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Additional routes can be added here */}
    </Routes>
  );
};

export default AppRoutes;
