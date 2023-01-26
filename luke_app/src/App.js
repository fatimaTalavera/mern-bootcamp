import SearchByType from './components/searchByType';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchByType/>}></Route>
        <Route  path="/:type/:id" element={<SearchByType/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
