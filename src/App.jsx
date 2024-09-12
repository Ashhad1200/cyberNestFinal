import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import MainLayout from './Components/MainLayout';
import Navbar from './Components/Navbar';
import AboutPage from './Pages/About';
// Import other page components here if needed, like Contact

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
