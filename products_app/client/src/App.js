import NewProduct from './components/newProduct';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;