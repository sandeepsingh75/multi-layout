import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Frontend from './components/layout/frontend/Frontend';
import Login from './pages/login/Login';
import Home from './pages/main/Main';
import Backend from './components/layout/backend/Backend';
import Register from './pages/Register/Register';
import {Container} from '@mui/material';

function App() {
  return (
    <Container>
     <Routes>
         <Route path='/' element={<Frontend />}>
            <Route index element={<Login />} />
            <Route path='/register' element={<Register />} />
         </Route>
  
     <Route path='/user' element={<Backend />}>
        <Route index element={<Home />} />
     </Route>
      
     </Routes>
     
    </Container>
  );
}

export default App;
