import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';

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
        <Route path="/act_14_react/" element={<MainLayout/>}>
          <Route path="/act_14_react/" element={<Menu/>}/>
          <Route path="/act_14_react/menu" element={<Menu/>}/>
          <Route path="/act_14_react/cart" element={<Cart/>}/>
          <Route path="/act_14_react/login" element={<Login child={<LoginForm/>}/>}/>
          <Route path="/act_14_react/register" element={<Login child={<RegisterForm/>}/>}/>
        </Route>
        <Route path="/act_14_react/landing" element={<LandingLayout/>}>
          {/* <Route path="/act_14_react/landing" element={<AboutApp/>}/> */}
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
