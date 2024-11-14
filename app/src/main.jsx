import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './assets/css/index.css';

// Layouts
import MainLayout from './layout/Main/MainLayout.jsx';
import LandingLayout from './layout/Landing/LandingLayout.jsx';
// Pages
import Error from './page/Error/Error.jsx';
import Menu from './page/Menu/Menu.jsx';
import Cart from './page/Cart/Cart.jsx';
import Login from './page/Login/Login.jsx';
import LoginForm from './page/Login/LoginForm.jsx';
import RegisterForm from './page/Login/RegisterForm.jsx';

// Al cambiar de pagina ir inicio de la misma
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop/>
    <StrictMode>
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
    </StrictMode>
  </BrowserRouter>
)
