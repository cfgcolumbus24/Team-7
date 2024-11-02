import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import LoginPage from './loginPage.jsx';


// createRoot function from the react-dom/client module. 
// The createRoot function is used to create a root for the application.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
);
