import NewProduct from './components/newProduct';
import ShowProduct from './components/showProduct';
import EditProduct from './components/editProduct';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewProduct/>}></Route>
        <Route path='/products/:id' element={<ShowProduct/>}></Route>
        <Route path='/products/edit/:id' element={<EditProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;