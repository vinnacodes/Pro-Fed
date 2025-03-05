// App.jsx
import './App.css';
import Home from './Homepage/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from './Jobs';
import Companies from './Companies';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar here to appear on all pages */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </Router>
  );
}

export default App;