import './index.css'
import { Routes, Route } from 'react-router-dom'

import { Home } from "./components/home/Home";
import { Navbar } from './components/navbar/Navbar';
import { Skills } from './components/skills/Skills'
import { Works } from './components/works/Works';
import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';
import { Resume } from './components/resume/Resume';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/works' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
