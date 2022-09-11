import './index.css'
import { Routes, Route } from 'react-router-dom'

import { Home } from "./components/home/Home";
import { Navbar } from './components/navbar/Navbar';
import { Skills } from './components/skills/Skills'

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
