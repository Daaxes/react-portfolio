import { HashRouter as Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import './App.css';

// Main App component
function App() {
  return (
    <>
      {/* Define the routes for the application */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
      
    </>
  )
}

// Export the App component
export default App;
