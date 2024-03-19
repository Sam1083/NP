import {Routes, Route} from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Body from './components/Body';
import About from './components/About';






function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/body" element={<Body />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
