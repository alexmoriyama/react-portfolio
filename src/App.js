import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

return (
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/resume" element={<Resume/>} />
    </Routes>
  <hr />
  <Footer/>
  </Router>
);

}

export default App;
