import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/index.css';

// Layouts
import MainLayout from './layout/Main/MainLayout.jsx';
import LandingLayout from './layout/Landing/LandingLayout.jsx';
// Pages
import Error from './page/Error/Error.jsx';
import Menu from './page/Menu/Menu.jsx';
import Cart from './page/Cart/Cart.jsx';
import Login, { LoginForm, RegisterForm } from './page/Login/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Menu/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login child={<LoginForm/>}/>}/>
          <Route path="/register" element={<Login child={<RegisterForm/>}/>}/>
        </Route>
        <Route path="/landing" element={<LandingLayout/>}>
          {/* <Route path="/act_11_react" element={<Act_6/>}/> */}
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
