import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/homepage/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import ProductPage from './pages/ProductPage/ProductPage';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='products/:productId' element={<ProductPage />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
