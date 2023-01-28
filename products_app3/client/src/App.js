import NewProduct from './components/newProduct';
import ShowProduct from './components/showProduct';
import EditProduct from './components/editProduct';
import Page404 from './components/404';
import Login from './components/login';
import SignUp from './components/signUp';
import Navbar from './components/navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<NewProduct/>}></Route>
        <Route path='/products/:id' element={<ShowProduct/>}></Route>
        <Route path='/products/edit/:id' element={<EditProduct/>}></Route>
        <Route path='/signup'element={<SignUp/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/404' element={<Page404/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;