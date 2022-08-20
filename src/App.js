import {useState} from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import Shop from './Pages/Shop';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ManageProduct from './Pages/ManageProduct';
import Dashboard from './Pages/Dashboard';
import Cart from './Pages/Cart';

function App() {
  const [active, setActive] = useState(1)
  return (
    <>
      <Sidebar active={active} setActive={setActive} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/manage' element={<ManageProduct />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/cart' element={<Cart />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
