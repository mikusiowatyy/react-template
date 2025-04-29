import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Strona główna</Link></li>
          <li><Link to="/about">O nas</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
          <li><Link to="/user/Janek">Przykład: Janek</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;