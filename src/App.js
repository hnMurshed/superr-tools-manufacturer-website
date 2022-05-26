import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/homepage/Home/Home';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
