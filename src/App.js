import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import About from './component/About';
import Home from './component/Home';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/content" element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
