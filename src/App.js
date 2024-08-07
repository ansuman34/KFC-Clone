import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Deals from './pages/deals';
import Menu from './pages/menu';
import SignIn from './pages/sign in';
import Otp from './pages/otp';
import CartPage from './pages/cart/cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;