import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import AddProduct from './pages/Dashboard/AddProduct';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageOrder from './pages/Dashboard/ManageOrder';
import ManageUser from './pages/Dashboard/ManageUser';
import ManageProducts from './pages/Dashboard/ManageProducts';
import Home from './pages/homepage/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import ProductPage from './pages/ProductPage/ProductPage';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import RequireAuth from './pages/shared/RequireAuth/RequireAuth';
import MyOrders from './pages/Dashboard/MyOrders';
import WriteReview from './pages/Dashboard/WriteReview';
import MyProfile from './pages/Dashboard/MyProfile';
import AllProducts from './pages/AllProducts/AllProducts';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='products/:productId' element={
          <RequireAuth>
            <ProductPage />
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path='addproduct' element={<AddProduct />}></Route>
          <Route path='manageusers' element={<ManageUser />}></Route>
          <Route path='manageproducts' element={<ManageProducts />}></Route>
          <Route path='manageorder' element={<ManageOrder />}></Route>
          <Route path='myorders' element={<MyOrders />}></Route>
          <Route path='writereview' element={<WriteReview />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
        </Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='allproducts' element={<AllProducts />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
