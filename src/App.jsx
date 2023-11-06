import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx'
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound';

//NOTE: Switch - replaced by Routes in react v6. Will be using the routes instead

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
