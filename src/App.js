import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/shop"  element={<Shop/>} />
      <Route path="/checkout"  element={<Checkout/>} />
      <Route path="/Blog"  element={<Blog/>} />
      <Route path="/Contact"  element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App