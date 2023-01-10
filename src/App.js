// necessary stuff
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

// pages
import Feed from './pages/feed';
import Reg from './pages/registration';
import Log from './pages/login';
import CRUDOp from './pages/crudop';
//components
import Header from './components/header';
import Footer from './components/footer';

//mui
import Stack from '@mui/material/Stack';


function App() {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={5}
    >
      <Header/>
      <Routes>

        <Route path="/" element={<Feed />} />

        <Route path="/registration" element={<Reg />} />
        <Route path="/login" element={<Log />} />
        <Route path="/crud" element={<CRUDOp/>} />

      </Routes>
      <Footer alignItems="flex-end"
              sx={{marginTop: 'calc(10% + 60px)',
              width: '100%',
              position: 'fixed',
              bottom: 0,
              width: '100%'
              }}/>
    </Stack>
    
  );
}

export default App;
