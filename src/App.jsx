// React Router //
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Navigation Bar //
import Navbar from "./Navbar";

// Pages //
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Application //
function App() {

    return (
        <Router>
            <div className="app-container">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Navigate to="/about" replace />} />
                    <Route path="/about" element={<About />} />
                    
                    {/* <Route path="/projects" element={<Projects />} /> */}
                    
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;