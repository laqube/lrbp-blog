// necessary stuff
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

// pages
import Feed from './pages/feed';
import Reg from './pages/registration';
import Log from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed/>}/>
      
      <Route path="/registration" element={<Reg/>}/>
      <Route path="/login" element={<Log/>}/>
    </Routes>
  );
}

export default App;
