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
import NotFound from './pages/NotFound/NotFound';
import Question1 from './pages/Blogs/Question1';
import Question2 from './pages/Blogs/Question2';
import Question3 from './pages/Blogs/Question3';
import Question4 from './pages/Blogs/Question4';
import Question5 from './pages/Blogs/Question5';
import Question6 from './pages/Blogs/Question6';

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
          <Route index element={<ManageOrder />}></Route>
          <Route index element={<MyOrders />}></Route>
          <Route path='writereview' element={<WriteReview />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
        </Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='blogs' element={<Blogs />}>
          <Route index element={<Question1 />}></Route>
          <Route path='question-2' element={<Question2 />}></Route>
          <Route path='question-3' element={<Question3 />}></Route>
          <Route path='question-4' element={<Question4 />}></Route>
          <Route path='question-5' element={<Question5 />}></Route>
          <Route path='question-6' element={<Question6 />}></Route>
        </Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='allproducts' element={<AllProducts />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
