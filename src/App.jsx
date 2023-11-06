import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx'
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact';
import Layout from './pages/Layout';

//NOTE: Switch - replaced by Routes in react v6. Will be using the routes instead

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<About />} />
          <Route index element={<Services />} />
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
