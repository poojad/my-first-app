import './App.css';
// import { ContactUs } from  './components/ContactUs'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
        Welcome to my first website - pooja kukshal
      </header> */}

        <nav>
          {/* <Link to="/">Home</Link> |{" "} */}
          <a href="/home">Home</a> |{" "}
          <a href="/about-us">About Us</a> |{" "}
          <a href="/contact-us">Contact Us</a>
          {/* <Link to="/user">User</Link> |{" "} */}
        </nav>


        <Routes>
          <Route path="/" />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
