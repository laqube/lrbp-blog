// necessary stuff
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

// pages
import Feed from './pages/feed';
import Reg from './pages/registration';
import Log from './pages/login';

//components
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <><><Header></Header><Routes>

      <Route path="/" element={<Feed />} />

      <Route path="/registration" element={<Reg />} />
      <Route path="/login" element={<Log />} />

    </Routes></><Footer alignItems="flex-end"></Footer></>
    
  );
}

export default App;
